/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { dispatchSymbols } from '../redux/stockData';
import Stock from './Stock';

const StockDisplay = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stockReducer.filteredSymbols || []);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!stocks.length) {
      dispatch(dispatchSymbols());
    }
  });

  return (
    <>
      <div className="stats">
        <Form className="d-flex">
          <p className="stats-text">Stats by company</p>
          <Form.Control
            type="search"
            placeholder="Search by company name or symbol"
            className="searchbar"
            aria-label="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form>
      </div>
      <div className="stock-container">
        {
            stocks.filter((stock) => {
              if (query === '') {
                return stock;
              } if (stock.name.toLowerCase().includes(query.toLowerCase()) || stock.symbol.toLowerCase().includes(query.toLowerCase())) {
                return stock;
              }
            }).map((stock, index) => (
              <div className="stock-item" key={index}>
                <Stock
                  key={stock.symbol}
                  symbol={stock.symbol}
                  name={stock.name}
                  price={stock.price}
                  exchange={stock.exchange}
                  exchangeShortName={stock.exchangeShortName}
                />
              </div>
            ))
}
      </div>
      
    </>
  );
};

export default StockDisplay;
