import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sardines = () => {
    const navigate = useNavigate();

    return (
        <div>
            Buy Sardines
            <br></br>
            <button onClick={() => navigate('/')}>Back to Vending Machine</button>
            
        </div>
    );
};

export default Sardines;