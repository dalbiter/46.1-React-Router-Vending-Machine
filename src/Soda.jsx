import React from 'react';
import { useNavigate } from 'react-router-dom';

const Soda = () => {
const navigate = useNavigate();

    return (
        <div>
            Buy Soda
            <br></br>
            <button onClick={() => navigate('/')}>Back to Vending Machine</button>
        </div>
    );
};

export default Soda;