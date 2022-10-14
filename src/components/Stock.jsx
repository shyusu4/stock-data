import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {BsArrowRightCircle} from "react-icons/bs";

const Stock = ({ symbol, name, exchangeShortName }) => {
  return (
            <Card className='card'>
              <Card.Body>
                <div key={symbol}>
                <Link to={`company/${symbol}`} className='arrow-container'>
                  <BsArrowRightCircle className="text-white fw-bolder fs-3"/>
                </Link>
                </div>
                <Card.Title><span className='card-title'>{symbol}</span></Card.Title>
                <Card.Text className='card-info'>
                  <span>{name} <span>({exchangeShortName})</span></span>
                </Card.Text>
              </Card.Body>
            </Card>
  )
};

Stock.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  exchangeShortName: PropTypes.string.isRequired,
};

export default Stock;
