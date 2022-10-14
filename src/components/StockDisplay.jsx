import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dispatchSymbols } from '../redux/stockData';
import Stock from './Stock';

const StockDisplay = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stockReducer.filteredSymbols || []);

  useEffect(() => {
    if (!stocks.length) {
      dispatch(dispatchSymbols());
    }
  });

  return (
    <div className="stock-container">
      <div className="stock-item">
        {stocks.map((stock) => (
          <Stock
            key={stock.symbol}
            symbol={stock.symbol}
            name={stock.name}
            price={stock.price}
            exchange={stock.exchange}
            exchangeShortName={stock.exchangeShortName}
          />
        ))}
      </div>
    </div>
  );
};

export default StockDisplay;
