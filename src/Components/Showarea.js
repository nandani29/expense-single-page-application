import React,{Component} from 'react';
import './Showarea.css';
// import pic from "../assets/images/expense.jpg";


class showarea extends Component{
    constructor(props){
        super(props)
        this.state={
            items:[],
            expense:'',
            amount:'',
            date:'',
            key:''
        };
    }
    handleDelete = (itemDeleted) =>{
        console.log(itemDeleted);
    }
    handleChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        });
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        const expense = this.state.expense;
        const amount = this.state.amount;
        const date= this.state.date;
        const newItems=this.state.items.concat(expense,amount,date);
        this.setState({
            expense:'',
            amount:'',
            date:'',
            key:'',
            items:newItems

        });
        console.log(this.state);
    }
    
    
    render(){
        return(
            <div className="textarea" >
                <h4>WELCOME! Here you can keep your daily expenses</h4>
                <h3>ADD EXPENSE</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>


                    <input className="add"
                    type="text"
                    placeholder="Enter Expense"
                    name="expense"
                    onChange={this.handleChange}
                    value={this.state.expense}
                    />
                    <br/>

                    <input className="add"
                    type="text"
                    placeholder="Enter Amount"
                    name="amount"
                    onChange={this.handleChange}
                    value={this.state.amount}
                    />
                    <br/>

                    <input className="add"
                    type="date"
                    name="date"
                    placeholder="Enter Date"
                    onChange={this.handleChange}
                    value={this.state.date}
                    />


                
                
                <button className="button1" type="submit" onClick={this.addItem}>ADD</button>
                <button className="button1" type="submit">DELETE</button>
                </form>
                {/* <img src={pic} alt="mypic" width="300px"/> */}
            

                <div>
                {this.state.items.map((item,i)=>{
                          return <h3>{item}</h3>
                    })}
                   
                </div>
            
            </div>
        );
    }

}
export default showarea;