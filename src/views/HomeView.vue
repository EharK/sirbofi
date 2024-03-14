<template>
  <main>
    <div class="service-container">
      <div class="filters-container">
        <div :class="{'pad filtering-pad': true, 'hidden': filter_pad_hidden}">
          <div class="filters-container-top-bar">
            <div class="flex column w-full">
              <button class="toggle-button w-full" :class="{'selected': !filter_pad_hidden}"
                      @click="filter_pad_hidden=!filter_pad_hidden">
                <h2 class="text">{{ filter_pad_hidden ? " << Undocked" : " >> Docked" }}</h2>
              </button>
              <div class="flex row space-between">
                <button class="filter-pad-top-nav-button bones"
                        v-if="current_filter_pad_view === filter_pad_view_types.advanced"
                        @click="changeFilterPadView(filter_pad_view_types.basic)">
                  <span class="text underline">{{ '< basic settings' }}</span>
                </button>
                <button class="filter-pad-top-nav-button bones"
                        v-else
                        @click="changeFilterPadView(filter_pad_view_types.advanced)">
                  <span class="text underline">Advanced settings ></span>
                </button>
                <button class="filter-pad-top-nav-button bones"
                        :class="{'disabled': !Object.keys(opportunities).length}"
                        @click="clearResults">
                  <span>Clear results</span>
                </button>
              </div>
            </div>
          </div>
          <div class="filtering-pad-content-wrapper basic"
               v-if="current_filter_pad_view === filter_pad_view_types.basic">
            <div :class="{'inputs-wrapper': true, 'disabled': scraping}">
          <span class="text">
            starting from BTC, ranked by market cap,
            start analyzing from rank:
          </span>
              <input type="number" placeholder="rank" v-model="starting_point"/>
              <span class="text">number of cryptos to check</span>
              <input type="number" placeholder="Number" v-model="crypto_list_len"/>
              <span class="text">number of market pairs to check</span>
              <div class="hr-buttons-container">
                <button :class="{'toggle-button': true, 'selected': markets_pairs_limit === market_limit}"
                        v-for="market_limit of market_pairs_limit_options"
                        @click="markets_pairs_limit = market_limit"
                >
                  <span class="text">{{ market_limit }}</span>
                </button>
              </div>
              <span class="text">market pairs check offset</span>
              <input type="number" placeholder="offset" v-model="market_pairs_offset"/>
              <span class="text">minimum profit margin %</span>
              <input type="number" placeholder="profit %" v-model="minimum_profit"/>
              <span class="text">maximum profit margin %</span>
              <input type="number" placeholder="profit %" v-model="maximum_profit"/>
              <span class="text">minimum trading volume (USD)</span>
              <input type="number" placeholder="minimum trading volume" v-model="minimum_trading_volume"/>
            </div>
            <span class="bottom-buttons">
            <button class="bones"
                    :class="{'disabled': !scraping}"
                    @click="stopScraping()">
              <span class="text underline">stop</span>
            </button>
            <button @click="searchOpportunities" :class="{'disabled': scraping}">
              <loading-spinner v-if="scraping"/>
               <span class="text">Trigger</span>
            </button>
          </span>
            <span class="text-tiny text-red" v-if="request_error">{{ request_error }}</span>
            <div class="wrap-row">
              <div class="statistics">
            <span class="text-tiny">
              number of price comparisons:
              <span class="text-green">{{ frmtNr(nr_of_price_comparisons) }}</span>
            </span>
                <span class="text-tiny">
              number of cryptos checked: <span class="text text-green">{{ frmtNr(nr_of_cryptos_checked) }}</span>
            </span>
                <span class="text-tiny">
              number of results:
              <span class="text text-green">
                {{ frmtNr(amount_of_opportunities_found) }}
              </span>
            </span>
              </div>
            </div>
          </div>
          <div class="filtering-pad-content-wrapper advanced"
               v-if="current_filter_pad_view === filter_pad_view_types.advanced">
            <div class="inputs-wrapper">
              <div class="advanced-filter-container">
            <span class="text">
              Filter trading categories:
              <span :class="{'disabled': !filter_by_trading_categories,
              'text-green': filter_by_trading_categories}">
                {{ filter_by_trading_categories ? 'enabled' : 'disabled' }}
              </span>
            </span>
                <div class="hr-buttons-container">
                  <button v-for="cat in trading_categories"
                          @click="selected_trading_category = selected_trading_category === cat ? null : cat"
                          :class="{'toggle-button': true,
              'selected': selected_trading_category === cat}">
                <span class="text">
                  {{ cat }}
                </span>
                  </button>
                </div>
              </div>
              <div class="advanced-filter-container">
            <span class="text">
              Filter by trading pair quote symbol:
              <span :class="{'disabled': selected_quote_symbols.length===0,
              'text-green': selected_quote_symbols.length>0}">
                {{ selected_quote_symbols.length > 0 ? 'enabled' : 'disabled (compares all possible trading pairs)' }}
              </span>
            </span>
                <div class="hr-buttons-container">
                  <button v-for="quote_symbol in Object.keys(quote_symbol_ids)"
                          @click="toggleValueInSelectionList(quote_symbol, selected_quote_symbols)"
                          :class="{'toggle-button': true,
              'selected': selected_quote_symbols.includes(quote_symbol)}">
                    <span class="text">{{ quote_symbol }}</span>
                  </button>
                </div>
              </div>
              <div class="advanced-filter-container">
            <span class="text">
              Filter trustworthy exchanges:
              <span :class="{'disabled': !filter_by_exchanges, 'text-green': filter_by_exchanges}">
                {{ filter_by_exchanges ? 'enabled' : 'disabled (allows over 600 exchanges)' }}
              </span>
            </span>
                <div class="hr-buttons-container">
                  <button v-if="selected_exchanges.length !== legit_exchanges.length"
                          @click="selected_exchanges = [...legit_exchanges]"
                          :class="{'toggle-button bones': true}">
                    <span class="text">SELECT ALL</span>
                  </button>
                  <button v-else
                          @click="selected_exchanges = []"
                          :class="{'toggle-button bones': true}">
                    <span class="text">DESELECT ALL</span>
                  </button>
                  <button v-for="exchange in legit_exchanges"
                          @click="toggleValueInSelectionList(exchange, selected_exchanges)"
                          :class="{'toggle-button': true,
              'selected': selected_exchanges.includes(exchange)}">
                    <span class="text">{{ exchange }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex column main-board">
        <top-bar/>
        <div class="all-ops">
          <div class="ops-per-crypto" v-for="crypto in Object.keys(opportunities)">
            <h2 class="crypto-section-title">{{ crypto }}</h2>
            <div class="op-table-headers">
              <div class="text exchange-link-header">
                Buy from
              </div>
              <div class="text price-header">
                price
              </div>
              <div class="text volume-header">
                24h volume
              </div>
              <div class="text profit-percentage-header">
                gap
              </div>
              <div class="text volume-header">
                24h volume
              </div>
              <div class="text price-header">
                price
              </div>
              <div class="text exchange-link-header">
                Sell to
              </div>
            </div>
            <div class="op" v-for="op in opportunities[crypto]">
              <button class="text exchange-link" @click="openInNewTab(op.buy_link)">
                {{ op.buy_from_exchange }}
              </button>
              <div class="text indicator price">
                {{ frmtNr(op.buy_from_price) }} $
              </div>
              <div class="text indicator volume">
                {{ op.buy_from_volume }} $
              </div>
              <div class="text text-green indicator profit-percentage">
                +{{ op.potential_profit }} %
              </div>
              <div class="text indicator volume">
                {{ op.sell_to_volume }} $
              </div>
              <div class="text indicator price">
                {{ frmtNr(op.sell_to_price) }} $
              </div>
              <button class="text exchange-link" @click="openInNewTab(op.sell_link)">
                {{ op.sell_to_exchange }}
              </button>
            </div>
          </div>
          <div class="no-results-placeholder" v-if="Object.keys(opportunities).length === 0 && !scraping">
            <h1>No results</h1>
            <ul>
              <li>Apply desired filters on left</li>
              <li>Click "Trigger" to start</li>
              <li>Wait for results to load</li>
            </ul>
          </div>
          <div v-if="scraping">
            <loading-spinner :size="64"/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import TopBar from "@/components/top-bar.vue";
import LoadingSpinner from "@/components/loadingSpinner.vue";
import {computed, onMounted, ref} from "vue";
import axios from "axios";

const nFormat = new Intl.NumberFormat();
const api_base_address = 'https://data.sirbofi.com'
const api_unreachable_error = "Couldn't access API."

function openInNewTab(url) {
  window.open(url, '_blank')
}

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      searchOpportunities()
    }
  })
})

// TYPES
const filter_pad_view_types = {
  basic: 'basic',
  advanced: 'advanced',
}
const trading_category_types = {
  spot: 'spot',
  perpetual: 'perpetual',
}

// CONTROLS
const filter_pad_hidden = ref(false)
const current_filter_pad_view = ref(filter_pad_view_types.basic)

function changeFilterPadView(view) {
  current_filter_pad_view.value = view
}

// DATA
const crypto_listings = ref([])
const legit_exchanges = [
  'binance',
  'binance-us',
  'binance-tr',
  'coinbase',
  'coinbase-exchange',
  'btcturk-pro', // 1M downloads and 4.6 rating
  'phemex', // 1M downloads and 4.5 rating
  'bitvavo', // 500K downloads and 4.5 rating
  'bitkub', // 1M downloads and 4.5 rating
  'coinex', // 1M downloads and 4.4 rating
  'indodax', // 1M downloads and 4.4 rating
  'coinmetro', // 50K downloads and 4.3 rating
  'kraken',
  'kucoin',
  'bitstamp',
  'okx',
  'gate-io',
  'bitget',
  'crypto-com-exchange',
  'gemini', // 1M downloads and 4.0 rating
  'lbank', // 1M downloads and 4.0 rating
  'mexc', // 1M downloads and 3.9 rating
  'bybit', // 10M downloads and 4.6 rating
  'bitrue', // 500K downloads and 4.1 rating
  'probit-exchange', // 100K downloads and 4.0 rating
  'Toobit', // 50K downloads and 4.4 rating
  'xt', // 500K downloads and 4.3 rating
  'pionex', // 500K downloads and 4.4 rating
  'biconomy', // 50K downloads and 4.4 rating
  'bingx', // 1M downloads and 4.4 rating
  'latoken', // 1M downloads and 4.6 rating
  'whitebit', // 500K downloads and 4.7 rating
  'weex', // 10K downloads and 4.1 rating
  'coinstore', // 100K downloads and 4.3 rating
  'indodax', // 1M downloads and 4.4 rating
  'btse', // 10K downloads and 4.8 rating
  'dydx',
  'pancakeswap-v2',
  'uniswap-v3',
  'uniswap-v2',
  'kine-protocol-polygon',
  'apex-protocol',
  'dodo',
]
const trading_categories = [
  trading_category_types.spot,
  trading_category_types.perpetual,
]
const quote_symbol_ids = {
  'USDT': 825,
  'BTC': 1,
  'USD': 2781,
  'TUSD': 2563,
  'BUSD': 4687,
  'EUR': 2790,
  'GBP': 2791,
}
const amount_of_opportunities_found = ref(0)
const request_error = ref(null)

function clearResults() {
  opportunities.value = {}
  request_error.value = null
  amount_of_opportunities_found.value = 0
  nr_of_market_pairs_checked.value = 0
  nr_of_price_comparisons.value = 0
  nr_of_cryptos_checked.value = 0
}

// FILTERS
const starting_point = ref(1)
const crypto_list_len = ref(10)
const market_pairs_limit_options = [20, 50, 100, 1000]
const markets_pairs_limit = ref(1000)
const market_pairs_offset = ref(1)
const minimum_profit = ref(2)
const maximum_profit = ref(12)
const minimum_trading_volume = ref(5000)
const selected_trading_category = ref(null)
const selected_exchanges = ref([])
const selected_quote_symbols = ref([])


// STATUS TRACKING
const scraping = ref(false)
const nr_of_market_pairs_checked = ref(0)
const nr_of_price_comparisons = ref(0)
const nr_of_cryptos_checked = ref(0)
const opportunities_count_limit = ref(200)


// MISC

const UrlCompiler = {
  listingsEndpoint: () => {
    const base = api_base_address + "/api/listings"
    const params = {
      start: starting_point.value || 1,
      limit: crypto_list_len.value || 20,
    }
    return base + '?' + new URLSearchParams(params).toString()
  },
  marketPairsEndpoint: (slug, quote_symbol = null) => {
    const base = api_base_address + "/api/market-pairs"
    const params = {
      slug: slug,
      start: market_pairs_offset.value || 1,
      limit: markets_pairs_limit.value || 20
    }
    if (selected_trading_category.value) {
      params.category = selected_trading_category.value
    }
    if (quote_symbol) {
      params.quoteCurrencyId = quote_symbol_ids[quote_symbol]
    }
    const result = base + '?' + new URLSearchParams(params).toString()
    console.log(result)
    return result
  },
}

function frmtNr(nr) {
  return Intl.NumberFormat().format(nr)
}

function toggleValueInSelectionList(val, list) {
  if (list.includes(val)) {
    list.splice(list.indexOf(val), 1)
  } else {
    list.push(val)
  }
}

function stopScraping() {
  scraping.value = false
  request_error.value = null
}

async function searchOpportunities() {
  request_error.value = null
  scraping.value = true
  amount_of_opportunities_found.value = 0
  const listings_api_url = UrlCompiler.listingsEndpoint()
  await axios.get(listings_api_url)
      .then(res => {
        if (res.status === 429) {
          request_error.value = "too many requests"
          scraping.value = false
          return false
        }
        crypto_listings.value = res.data.data.cryptoCurrencyList
        getAllOpportunities()
      }).catch(err => {
        console.log(err)
        request_error.value = api_unreachable_error
        scraping.value = false
      })
}

async function marketPairsFromSlug(slug) {
  // normal search IF no quote symbol is selected ELSE iterate over selected quote symbols ->
  const custom_quote_symbol_list = selected_quote_symbols.value.length > 0 ? selected_quote_symbols.value : [null]
  let tmp = []
  for (const quote_symbol of custom_quote_symbol_list) {
    const endpoint = UrlCompiler.marketPairsEndpoint(slug, quote_symbol)
    await axios.get(endpoint).then(res => {
      if (res.data.status === 429) {
        request_error.value = "too many requests"
        scraping.value = false
        return false
      } else if (res.data.status.error_code === "500") {
        request_error.value = "server gave err 500. could be overloaded"
        scraping.value = false
        return false
      }
      if ((res.data?.data?.marketPairs?.length > 0)) {
        tmp.push(...res.data.data.marketPairs);
      }
    }).catch(err => {
      console.log(err)
      request_error.value = api_unreachable_error
      scraping.value = false
    })
  }
  return [...new Set(tmp)]
}

function getComparisonProfitOfPairs(buyFromPair, sellToPair) {
  nr_of_price_comparisons.value++
  return ((sellToPair.price - buyFromPair.price) / buyFromPair.price * 100).toFixed(2)
}

const opportunities = ref({})

async function getAllOpportunities() {
  let ops = {}
  for (const crypto of crypto_listings.value) {
    if (scraping.value === false) {
      break
    }
    await marketPairsFromSlug(crypto.slug).then(pairs => {
      if (!pairs) {
        return
      }
      let filtered_pairs = []
      // filter out pairs that don't meet the criteria
      for (const pair of pairs) {
        if (pair.volumeUsd > minimum_trading_volume.value
            && (!filter_by_exchanges.value
                || selected_exchanges.value.includes(pair.exchangeSlug))
            && pair.isVerified && !pair.poorAuditStatus
        ) {
          filtered_pairs.push(pair)
        }
      }

      // compare pairs
      for (let i = 0; i < filtered_pairs.length; i++) {
        for (let j = i + 1; j < filtered_pairs.length; j++) {
          let pair1 = filtered_pairs[i]
          let pair2 = filtered_pairs[j]
          let buyFromPair = pair1.price < pair2.price ? pair1 : pair2
          let sellToPair = pair1.price > pair2.price ? pair1 : pair2
          let profit = Number(getComparisonProfitOfPairs(buyFromPair, sellToPair))
          if (profit > minimum_profit.value && profit < maximum_profit.value) {
            if (!ops[crypto.slug]) {
              ops[crypto.slug] = []
            }
            ops[crypto.slug].push(
                {
                  buy_from_exchange: buyFromPair.exchangeSlug,
                  buy_from_price: buyFromPair.price,
                  buy_from_volume: frmtNr(buyFromPair.volumeUsd.toFixed(0)),
                  buy_link: buyFromPair.marketUrl,
                  crypto: crypto.slug,
                  potential_profit: profit,
                  sell_to_exchange: sellToPair.exchangeSlug,
                  sell_to_price: sellToPair.price,
                  sell_to_volume: frmtNr(sellToPair.volumeUsd.toFixed(0)),
                  sell_link: sellToPair.marketUrl,
                }
            )
            amount_of_opportunities_found.value++
            if (amount_of_opportunities_found.value >= opportunities_count_limit.value) {
              scraping.value = false;
              request_error.value = "Illogical amount of results! Stopped search to protect performance. You need more strict filters.";
            }
          }
          if (scraping.value === false) {
            break
          }
        }
        nr_of_market_pairs_checked.value++
        ops[crypto.slug]?.sort((a, b) => {
          return b.potential_profit - a.potential_profit
        })
        if (scraping.value === false) {
          break
        }
      }
    })
    opportunities.value = {...ops};
    nr_of_cryptos_checked.value++;
  }
  scraping.value = false;
}


const filter_by_exchanges = computed(() => {
  return selected_exchanges.value.length > 0
})
const filter_by_trading_categories = computed(() => {
  return !!selected_trading_category.value
})
</script>

<style scoped>

/* width */
.main-board *::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.main-board *::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
.main-board *::-webkit-scrollbar-thumb {
  background: var(--slight);
  border-radius: 10px;
}

/* Handle on hover */
.main-board *::-webkit-scrollbar-thumb:hover {
  background: #555;
}

ul {
  line-height: 2;
  list-style: none;
  text-align: center;
}

.service-container {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.no-results-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  align-items: center;
}

.text-tiny {
  font-size: 0.8rem;
}

input {
  min-width: 240px;
}

.filters-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main-board {
  width: 100%;
}

.filtering-pad {
  width: 400px;
  height: 100vh;
  overflow: auto;
  background: linear-gradient(180deg, #262626, #151515);
  border-radius: 0;
  outline: 0;
  transition: margin 0.2s, height 0.2s;
}

.filtering-pad.hidden {
  margin-left: -380px;
  height: 80vh;
  position: absolute;
  border-radius: 0 4px 4px 0;
}

.filtering-pad.hidden:hover {
  margin-left: 0;
}

.filtering-pad::-webkit-scrollbar {
  display: block;
}

.filtering-pad input {
  width: 100%;
  border-bottom: var(--slight) 1px solid;
  background-color: transparent;
}

.filtering-pad-content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8rem;
  padding: 1rem 2rem;
}

.filtering-pad-content-wrapper .inputs-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.filters-container-top-bar {
  position: fixed;
  padding: 1rem 2rem;
  border-radius: 4px;
  width: inherit;
  backdrop-filter: blur(4px) brightness(0.4);
  z-index: 9;
}

button.filter-pad-top-nav-button {
  margin-top: 20px;
}

.bottom-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.statistics {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.all-ops {
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  width: 100%;
  gap: 60px;
  min-height: 0;
  height: calc(100vh - 100px);
  overflow-y: auto;
  min-width: 650px;
}

.ops-per-crypto {
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  border: 1px solid var(--slight);
  border-radius: 8px;
  text-align: center;
  min-height: max-content;
}

.crypto-section-title {
  font-size: 1.5rem;
  padding: 20px 0;
  border-bottom: 1px solid var(--slight);
  text-align: center;
  color: var(--light);
}

.op-table-headers {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px;
}

.op {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px;
}

.op .indicator,
.op-table-headers .price-header,
.op-table-headers .volume-header,
.op-table-headers .profit-percentage-header {
  width: 100px;
  text-align: center;
  white-space: nowrap;
}

.op .indicator.price,
.op .indicator.volume,
.op-table-headers .price-header,
.op-table-headers .volume-header {
  min-width: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.op button {
  justify-content: center;
}

.op button.exchange-link,
.op-table-headers .exchange-link-header {
  min-width: 75px;
  width: 200px;
  overflow: hidden;
}

.filtering-pad-content-wrapper.advanced .advanced-filter-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 10px 0;
}

.hr-buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

@media screen and (max-width: 1200px) {
  .all-ops {
    padding: 0 10px 0 0;
  }

  .filtering-pad {
    width: 340px;
  }

  .filtering-pad.hidden {
    margin-left: -320px;
  }

  .text {
    font-size: 12px;
  }

  .service-container {
    gap: 10px;
  }
}

@media screen and (max-width: 1000px) {

  .service-container {
    flex-direction: column;
    gap: 20px;
  }

  .filters-container {
    width: 100%;
    height: max-content;
    margin-bottom: 50px;
  }

  .filtering-pad {
    width: 100%;
    height: max-content;
    border-radius: 0;
    position: relative;
    top: 0;
    margin-left: 0;
  }

  .filtering-pad.hidden {
    margin-left: 0;
    margin-top: 0;
  }

  .all-ops {
    width: 100%;
    min-width: 0;
    height: max-content;
    padding: 0;
    min-height: 0;
  }

  .ops-per-crypto {
    width: 100%;
    min-width: 0;
    height: max-content;
    min-height: 0;
    padding: 0;
    border: 0;
  }

  .all-ops .price-header,
  .ops-per-crypto .price {
    display: none;
  }
}

</style>
