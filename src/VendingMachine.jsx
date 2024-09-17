import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const VendingMachine = () => {
    return (
        <div>
            <BrowserRouter>
                <nav>
                    <Link to="/chips">Chips</Link>
                    <Link to="/soda">Soda</Link>
                    <Link to="/sardines">Sardines</Link>
                </nav>
            </BrowserRouter>
            
        </div>
    );
};

export default VendingMachine;