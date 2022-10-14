import { getSymbolsData, getCompaniesData } from "./fetchData";

const GET_SYMBOLS = 'stock-data/GET_SYMBOLS';
const GET_COMPANIES = 'stock-data/GET_COMPANIES';

const initialState = {
  loading: true,
};

const getSymbols = (id) => ({
  type: GET_SYMBOLS,
  payload: id,
});

const getCompanies = (id) => ({
  type: GET_COMPANIES,
  payload: id,
});

const dispatchSymbols = () => async (dispatch) => {
  const symbolsList = await getSymbolsData();
  const symbols = getSymbols(symbolsList);
  dispatch(symbols);
};

const dispatchCompanies = (company) => async (dispatch) => {
  const profile = await getCompaniesData(company);
  dispatch(getCompanies(profile));
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SYMBOLS:
      return {
        ...state,
        isSymbolsStored: true,
        symbols: action.payload,
        filteredSymbols: action.payload,
        nbResult: action.payload.length,
        loading: false,
      };

    case GET_COMPANIES: {
      return {
        ...state,
        company: action.payload,
      };
    }

    default:
      return state;
  }
};

export default stockReducer;
export {dispatchSymbols, dispatchCompanies}