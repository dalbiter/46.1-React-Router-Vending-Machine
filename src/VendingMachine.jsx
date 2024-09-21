import React, { useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
import NavBar from './NavBar';

/**
 * The main vending machine component, displays a navbar to select individual items 
 * @returns a navbar with direct links to each vending machine item
 */
const VendingMachine = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Link to="/chips">Chips</Link>
                <Link to="/soda">Soda</Link>
                <Link to="/sardines">Sardines</Link>
                <Routes>
                    <Route exact path='/chips' element={<Chips />} />
                    <Route exact path='/soda' element={<Soda />} />
                    <Route exact path='/sardines' element={<Sardines />} />
                </Routes>
            </BrowserRouter>
            
        </div>
    );
};

export default VendingMachine;