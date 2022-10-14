import stockReducer, { GET_SYMBOLS } from '../redux/stockData';

const testData = [{
  symbol: 'MU',
  name: 'Micron Technology, Inc.',
  price: 75.7,
  exchange: 'Nasdaq Global Select',
  exchangeShortName: 'NASDAQ',
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
});
