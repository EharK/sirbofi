import {defineStore} from 'pinia'
import {computed, ref} from "vue";
import {initializeApp} from "firebase/app";
import router from "@/router/index.js";
import { getFirestore, collection, doc, setDoc, getDocs, query, where, updateDoc, serverTimestamp  } from 'firebase/firestore/lite';
import { fetchBalance, account } from '@kolirt/vue-web3-auth';

export const useAuthenticatorStore
    = defineStore(
    'AuthenticatorStore',
    () => {
        let db = null
        const error = ref(null)

        const initFirebaseApp = async () => {
            const firebaseConfig = {
                apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
                authDomain: "aoft-de2ab.firebaseapp.com",
                projectId: "aoft-de2ab",
                storageBucket: "aoft-de2ab.appspot.com",
                messagingSenderId: "630650035711",
                appId: "1:630650035711:web:210507afd411fc5cb91bca",
                measurementId: "G-W5TJ6PV4GV"
            };
            const app = initializeApp(firebaseConfig);
            db = getFirestore(app);
        }

        async function isUserExist(address) {
            if(!sessionStorage.connected)
                return []
            const useRef = collection(db, 'users');
            const q = query(useRef, where("address", "==", address));
            const userSnapshot = await getDocs(q);
            const user = userSnapshot.docs.map(doc => doc.data())[0];
            return user;
        }

        async function getSubscription() {
            const collectionRef = collection(db, 'subscription')
            const q = query(collectionRef)

            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach(document => {
                items.push(document.data())
            })
            return items
        }

        async function setSubscription(period, walletAddress) {
            const endTimestamp = new Date();
            endTimestamp.setMonth(endTimestamp.getMonth() + period);
            const useRef = collection(db, 'users');
            const q = query(useRef, where("address", "==", walletAddress));
            const userSnapshot = await getDocs(q);
            const documentID = userSnapshot.docs.map(doc => doc.id)[0];
            const docRef = doc(db, 'users', documentID);
            await updateDoc(docRef, {
                subscription_end: endTimestamp,
                subscription_start: serverTimestamp(),
                subscription_status: true
            });
            router.push('/');
        }

        async function setAccess(walletAddress, status) {
            const useRef = collection(db, 'users');
            const q = query(useRef, where("address", "==", walletAddress));
            const userSnapshot = await getDocs(q);
            const documentID = userSnapshot.docs.map(doc => doc.id)[0];
            if(!documentID) {
                const bofiAmount = await getBofiBalance();
                const newUserRef = doc(collection(db, "users"));
                const data = {
                    is_logged_in: true,
                    access_status: status,
                    bofiAmount: bofiAmount,
                    subscription_end: null,
                    subscription_start: null,
                    subscription_status: false,
                    address: walletAddress
                }
                await setDoc(newUserRef, data);
            } else {
                const docRef = doc(db, 'users', documentID);
                await updateDoc(docRef, {
                    access_status: status
                });
            }
            if(status)
                router.push('/');
        }

        async function getBofiBalance() {
            const { formatted } = await fetchBalance({
                address: account.address,
                token: '0xe3374f14Be081EAe24E39E18360422b7AA769859'
            })
            return formatted;
        }

        const signIn = async (walletAddress) => {
            let data = {
                is_logged_in: false,
                access_status: false,
                bofiAmount: 0,
                subscription_end: null,
                subscription_start: null,
                subscription_status: false,
                address: null
            }
            const userExists = await isUserExist(walletAddress);
            const bofiAmount = await getBofiBalance();
            if(!userExists) {
                const newUserRef = doc(collection(db, "users"));
                data = {
                    is_logged_in: true,
                    bofiAmount: bofiAmount,
                    address: walletAddress
                }
                await setDoc(newUserRef, data);
            } else {
                const useRef = collection(db, 'users');
                const q = query(useRef, where("address", "==", walletAddress));
                const userSnapshot = await getDocs(q);
                const documentID = userSnapshot.docs.map(doc => doc.id)[0];
                const docRef = doc(db, 'users', documentID);
                await updateDoc(docRef, {
                    is_logged_in: true,
                    bofiAmount: bofiAmount
                });
                data = {
                    is_logged_in: true,
                    bofiAmount: bofiAmount,
                    access_status: userExists.access_status,
                    subscription_end: userExists.subscription_end,
                    subscription_start: userExists.subscription_start,
                    subscription_status: userExists.subscription_status,
                    address: walletAddress
                }
            }
            sessionStorage.setItem("connected", "connected");
            router.push('/')
        }

        const signOut = async (walletAddress) => {
            const useRef = collection(db, 'users');
            const q = query(useRef, where("address", "==", walletAddress));
            const userSnapshot = await getDocs(q);
            const documentID = userSnapshot.docs.map(doc => doc.id)[0];
            const docRef = doc(db, 'users', documentID);
            await updateDoc(docRef, {
                is_logged_in: false
            });
            router.push('/login')
        }

        return {
            initFirebaseApp,
            error,
            isUserExist,
            getSubscription,
            setSubscription,
            setAccess,
            getBofiBalance,
            signIn,
            signOut
        }
    })