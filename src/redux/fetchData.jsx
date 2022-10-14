import axios from 'axios';

// API key cea63023bbdb710b328c1a9a365eea22
const apiUrl = 'https://financialmodelingprep.com/api/v3/';
const symbolsUrl = `${apiUrl}available-traded/list?apikey=d70b4d5845c84ca26522d88082adf9d0`;
const companiesUrl = `${apiUrl}profile/`;

const getSymbolsData = async () => {
  const getApi = await axios.get(symbolsUrl);
  const symbolsArr = [];
  for (let i = 0; i < 500; i += 1) {
    symbolsArr.push(getApi.data[i]);
  }
  return symbolsArr;
};

const getCompaniesData = async (company) => {
  const getApi = await axios.get(`${companiesUrl}${company}?apikey=d70b4d5845c84ca26522d88082adf9d0`);
  const result = getApi.data[0];
  return result;
};

export { getSymbolsData, getCompaniesData };
