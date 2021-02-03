import React, { Component } from "react";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import OneComp from './Components/OneComp/OneComp';


class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  state = {
    user: this.props.cookies.get("user") || ""
  };

  handleCookie = () => {
    const { cookies } = this.props;
    cookies.set("user", "gowtham", { path: "/" }); // setting the cookie
    this.setState({ user: cookies.get("user") });
    //alert(cookies.get("user"));
    
  };

  componentWillMount(){
    fetch("/testAPI")
    .then(res=>res.text())
      .then(res=> this.setState({apiResponse: res}));
  }

  render() {
    const { user } = this.state;
    if(this.state.user !=="")
     {
       //alert("no cookie");
    return (
     
       <div className="App">
      <OneComp data= {this.state.apiResponse}/>
        </div>
        )
    }
       else{
        //alert("yes cookie");
        return( 
        <div>
        <button onClick={this.handleCookie}>Set Cookie</button>
        </div> 
        );
       }
      
    
  }
}

export default withCookies(App);


