import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {BsArrowLeftCircle} from "react-icons/bs";

function DetailsHeader() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} variant="dark" expand={expand} className="mb-3 fixed-top navbar">
          <Container fluid>
            <Navbar.Brand href="#" className='navbar-name'>Stock Market Metrics</Navbar.Brand>
            <Link to="/">
          <BsArrowLeftCircle className="text-white fw-bolder fs-3" />
        </Link>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default DetailsHeader;