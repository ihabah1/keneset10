import React, { Component } from "react";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import OneComp from './Components/OneComp/OneComp';
import './App.css';


class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  state = {
    user: this.props.cookies.get("user") || ""
  };

  
  componentWillMount(){
    fetch("/testAPI1")
    .then(res=>res.text())
      .then(res=> this.setState({apiResponse: res}));   
  }

  render() {
    const { user } = this.state;
       //alert("no cookie");
    return (
       <div className="App">
      <OneComp data= {this.state.apiResponse}/>
        </div>
        )
  }
}




export default withCookies(App);


