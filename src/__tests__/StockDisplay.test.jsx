import React from 'react';
import Renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import StockDisplay from '../components/StockDisplay';

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  };
};

describe('StockDisplay', () => {
  it('Check if StockDisplay component renders correctly', () => {
    const tree = Renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <StockDisplay />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
