import stockReducer, { GET_SYMBOLS, GET_COMPANIES } from '../redux/stockData';

const testData = [{
  symbol: 'MU',
  name: 'Micron Technology, Inc.',
  price: 75.7,
  exchange: 'Nasdaq Global Select',
  exchangeShortName: 'NASDAQ',
}];

const companiesTestData = [{
  symbol: 'MU',
  price: 52.905,
  beta: 1.276344,
  volAvg: 17389251,
  mktCap: 57516728320,
  lastDiv: 0.43000000000000005,
  range: '48.45-98.45',
  changes: -1.9550018,
  companyName: 'Micron Technology, Inc.',
  currency: 'USD',
  cik: '0000723125',
  isin: 'US5951121038',
  cusip: '595112103',
  exchange: 'NASDAQ Global Select',
  exchangeShortName: 'NASDAQ',
  industry: 'Semiconductors',
  website: 'https://www.micron.com',
  description: 'Micron Technology, Inc. designs, develops, manufactures, and sells memory and storage products worldwide. The company operates through four segments: Compute and Networking Business Unit, Mobile Business Unit, Embedded Business Unit, and Storage Business Unit. It provides memory and storage technologies comprises DRAM products, which are dynamic random access memory semiconductor devices with low latency that provide high-speed data retrieval; NAND products that are non-volatile and re-writeable semiconductor storage devices; and NOR memory products, which are non-volatile re-writable semiconductor memory devices that provide fast read speeds under the Micron and Crucial brands, as well as through private labels. The company offers memory products for the cloud server, enterprise, client, graphics, networking, industrial, and automotive markets, as well as for smartphone and other mobile-device markets; SSDs and component-level solutions for the enterprise and cloud, client, and consumer storage markets; discrete storage products in component and wafers; and memory and storage products for the automotive, industrial, and consumer markets. It markets its products through its direct sales force, independent sales representatives, distributors, and retailers; and web-based customer direct sales channel, as well as through channel and distribution partners. Micron Technology, Inc. was founded in 1978 and is headquartered in Boise, Idaho.',
  ceo: 'Mr. Sanjay Mehrotra',
  sector: 'Technology',
  country: 'US',
  fullTimeEmployees: '48000',
  phone: '12083684000',
  address: '8000 S Federal Way, PO Box 6',
  city: 'Boise',
  state: 'IDAHO',
  zip: '83716-9632',
  dcfDiff: 6.80368,
  dcf: 61.6637,
  image: 'https://financialmodelingprep.com/image-stock/MU.png',
  ipoDate: '1984-06-01',
  defaultImage: false,
  isEtf: false,
  isActivelyTrading: true,
  isAdr: false,
  isFund: false,
}];

describe('Reducer test', () => {
  it('should return default state', () => {
    const state = stockReducer(undefined, {});
    expect(state).toEqual({ loading: true });
  });

  it('should get symbols data', () => {
    const state = {};
    const newState = stockReducer(state, {
      type: GET_SYMBOLS,
      payload: testData,
    });

    expect(newState).toEqual({
      isSymbolsStored: true,
      loading: false,
      nbResult: 1,
      filteredSymbols: testData,
      symbols: testData,
    });
  });

  it('should get companies data', () => {
    const state = [];
    const newState = stockReducer(state, {
      type: GET_COMPANIES,
      payload: companiesTestData,
    });

    expect(newState).toEqual({
      company: companiesTestData,
    });
  });
});
