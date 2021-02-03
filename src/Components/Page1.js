import React,{Component} from "react";
import './Page1.css';

const getImagesUrl = 'https://images-na.ssl-images-amazon.com/images/I/51xWUNaisvL._SL1300_.jpg'; 
const postBody = {
  type: "hot",
  limit: 10
};
const requestMetadata = {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(postBody)
};

async function loginOne(a) 
    {   
      const resp = await fetch('/ping');
      const body = await resp.text();
      console.log(body)
    } 


async function login(a) 
    {   
      const resp = await  fetch('/pingOne',requestMetadata)
      .then((response) => response.text())
     .then((messages) => {console.log(messages);});
  }
 


 class Pag1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count25: 0,
      count30: 0,
      count35:0,
      count40:0,
      pay: 100
    };
}

handleChange = (id,e) =>{
  console.log(id);
    login() ;
   loginOne();
  }


    render(){

     return (
        <div id="container">
        <div id="box">
          <h1 id="subjectTxt">{this.state.pay}$ as a gift</h1>
          <ul>
            <img id="img1" src={getImagesUrl}/>
            <img id="img2" src={getImagesUrl} />
            <img id="img3" src={getImagesUrl} />
            <img id="img4" src={getImagesUrl} />
            <textarea id="txt1" defaultValue={"0"} />
            <textarea id="txt2" defaultValue={"0"} />
            <textarea id="txt3" defaultValue={"0"} />
            <textarea id="txt4" defaultValue={"0"} />
            <button id="one" onClick={(evt) => this.handleChange(25, evt)}> add 25$<br /></button> 
            <button id="two"> add 30$<br /></button>
            <button id="three"> add 35$<br /></button>
            <button id="four"> add 40$<br /></button>
          </ul>
          <button id="button1" onClick={this.handleChange}>G to Cart</button>
        </div>
      </div>
     )
    }

}

export default Pag1;

