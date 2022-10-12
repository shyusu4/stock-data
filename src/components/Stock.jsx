import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import {BsArrowRightCircle} from "react-icons/bs";

const Stock = ({
  symbol, name, exchangeShortName,
}) => (
            <Card className='card'>
              <Card.Body>
                <div className='arrow-container'><BsArrowRightCircle className="text-white fw-bolder fs-3"/></div>
                <Card.Title><span className='card-title'>{symbol}</span></Card.Title>
                <Card.Text className='card-info'>
                  <span>{name} <span>({exchangeShortName})</span></span>
                </Card.Text>
              </Card.Body>
            </Card>
);

Symbol.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  exchangeShortName: PropTypes.string.isRequired,
};

export default Stock;
