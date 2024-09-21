import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * A vending machine item
 * @returns a div showing the vending machine item currently selected and a back button to navigate home
 */
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