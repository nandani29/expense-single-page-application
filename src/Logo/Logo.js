import React from 'react';

import './Logo.css';
import expenseLogo from '../assets/images/expenses.png';


const logo=(props)=>(
    <div className="Logo">
        <img src={expenseLogo} alt="MYexpense" />
    </div>
);

export default logo;