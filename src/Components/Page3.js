import React,{Component} from "react";
import './Page3.css';



 class Pag3 extends Component {
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
          <h1 id="subjectTxt">Total</h1>
          <ul>
            <p id="subText">summary </p>
            <p id="subText2">You have paid<p> {this.state.pay} $</p></p>
           </ul>
          
        </div>
      </div>
     )
    }

}

export default Pag3;

