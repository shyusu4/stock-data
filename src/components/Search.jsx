import React from "react";
import Form from 'react-bootstrap/Form';

const Search = () => {
    return (
        <div className='stats'>
        <Form className="d-flex">
            <p className="stats-text">Stats by company</p>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="searchbar"
                    aria-label="Search"
                  />
                </Form>
        </div>
    )
}

export default Search;