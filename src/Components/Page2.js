import React,{Component} from "react";
import './Page2.css';


  

 class Pag2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          pay: 0
        };
    }

    handleChange = (e) =>{
        this.setState({count: this.state.count + 1});
      }

    render(){

     return (
        <div id="container">
        <div id="box">
          <h1 id="subjectTxt">you have in cart</h1>
          <ul>
            <p id="subText">You have in cart <p> {this.state.count} Items</p></p>
            <p id="subText2">You have to pay <p> {this.state.pay} $</p></p>
           </ul>
          <button id="button1" onClick={this.handleChange}>Pay</button>
        </div>
      </div>
     )
    }

}

export default Pag2;

