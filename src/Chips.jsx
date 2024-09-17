import React from 'react';
import { useNavigate } from 'react-router-dom';

const Chips = () => {
const navigate = useNavigate();

    return (
        <div>
            Buy Chips
            <br></br>
            <button onClick={() => navigate('/')}>Back to Vending Machine</button>
        </div>
    );
};

export default Chips;