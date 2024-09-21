import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * A vending machine item
 * @returns a div showing the vending machine item currently selected and a back button to navigate home
 */
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