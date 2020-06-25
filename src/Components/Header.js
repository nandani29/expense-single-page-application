import React,{Component} from 'react';
import './Header.css';
import Logo from '../Logo/Logo';

class header extends Component{
    render()
    {
        return(
            <div className="header">
                <Logo/>
                <h2>Expense Management System</h2>
            
            </div>
        );
    }
}
export default header;