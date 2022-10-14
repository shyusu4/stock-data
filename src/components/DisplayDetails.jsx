import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { dispatchCompanies } from '../redux/stockData';
import DetailsHeader from './DetailsHeader';

const DisplayDetails = () => {
    const dispatch = useDispatch();
    const company = useSelector((state) => state.stockReducer.company || '',);
    const { name } = useParams();
    useEffect(() => {
      dispatch(dispatchCompanies(name));
    }, [company.name, dispatch, name]);
  
  return (
    <>
    <DetailsHeader />
    <div className='details-container'>
      <div className='details-header'>
        <div className='details-img-div'><img src={company.image} alt="company logo" className='details-img img-fluid'/></div>
        <p className="stats-breakdown">Stats Breakdown</p>
      </div>
      <div className='details-body'>
<div className='details-metric'>
  <p>Company Name: {company.companyName}</p>
</div>
<div className='details-metric'>
  <p>Symbol: {company.symbol}</p>
</div>
<div className='details-metric'>
  <p>Currency: {company.currency}</p>
</div>
<div className='details-metric'>
  <p>Exchange: {company.exchange}</p>
</div>
<div className='details-metric'>
  <p>Price: {company.price}</p>
</div>
<div className='details-metric'>
  <p>Range: {company.range}</p>
</div>
<div className='details-metric'>
  <p>Changes: {company.changes}</p>
</div>
<div className='details-metric'>
  <p>Market Cap: {company.mktCap}</p>
</div>
      </div>
    </div>
    </>
  );
}

export default DisplayDetails;