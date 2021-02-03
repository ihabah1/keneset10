//import components
import './OneComp.css'
import React, { useState } from "react"
import { render } from 'react-dom';

//Images for buttons
import imageAtid from "../OneComp/Images/buttons/atid.JPG";
import imageHist from "../OneComp/Images/buttons/history.JPG";
import takanon from "../OneComp/Images/buttons/takanon.JPG";
import ofer from "../OneComp/Images/buttons/Ofer.JPG";
import logo from "../OneComp/Images/buttons/Logo.JPG";
import logo2 from "../OneComp/Images/buttons/Logo2.JPG";
// Generic veriables 
const root = document.querySelector('#root')
const one = "";
//oneComp


 function SendForm() 
  {   
    var subject = document.getElementById("subjectlbl").value;
    var Text = document.getElementById("subjectTxt").value;
    var Haver = document.getElementById("drpbx1").value;
   // alert("subject: "+subject);
    //alert(Text);
    alert("subject:"+ subject +" text "+Text+" Haver "+ Haver);
    //
    document.getElementById("subjectlbl").value="";
    document.getElementById("subjectTxt").value="";
     document.getElementById("drpbx1").value="";
    //alert(texThaver);
    //alert(myVal);
  }



function OneComp(props) {
  let onePar = "";
  let twoPar = "";
  let threePar = "";
  let fourPar = "";
  let title = "";



  
  (props === "") ? console.log() : Do();
  function Do() {
    let jsn = JSON.stringify(props)
    var items = jsn.split('"');
    let Items1 = ItemsRefact(items);
    onePar = Items1[1];
    twoPar = Items1[2];
    threePar = Items1[3];
    fourPar = Items1[4];
    title = newFunction(title, Items1);
  };



  return (
    <div className="content">
      <div className="relative001">
        <img id="imgLogo" src={logo} alt="" />
      </div>
      <div className="relative0">
        <div className="hdr">
          <a id="logoID" className="logo">התחבר למערכת<img id="logo2" src={logo2} alt=""></img></a>
          <div className="header-right">
            <span className="active" href="#">ח"כים וסיעות</span>
            <span href="#contact">ועדות</span>
            <span href="#about">כלים פרלמנטריים</span>
          </div>
        </div>
      </div>
      <div div className="relative01" >
        <div className="hdr">
          <div className="header-right1" id="hd">
            <a className="active">דף הבית /</a>
            <a >כלים פרלמנטריים/</a>
            <a >כינוס הכנסת בזמן הפוגה</a>
          </div>
        </div>
      </div>
      <div className="relative">

        <div className="absolute1">

          <div className="absolute11">
            <img id="img1" src={takanon} alt="" />
            <p id="sub14"> <br />
              {onePar}
            </p>
          </div>
        </div>
        <div className="absolute2">
          <div className="absolute12">
            <p id="sub12">{title}</p>
            <p id="sub13"><br />
              {twoPar}
            </p>
          </div>
        </div>
        <div className="absolute3">
          <div className="absolute13">
            <img id="img3" src={imageHist} alt="" />
            <p>
              {threePar}
            </p>
          </div>
          <br />

        </div>

        <div className="absolute4">

          <div className="absolute14">
            <img id="img4" src={imageAtid} alt="" />
            <p>
              {fourPar}
            </p>

          </div>

        </div>
      </div>
      <div className="relative2">
        <img id="img12" src={ofer} alt="" />
        <div className="absolute21">

          <p id="oferlbl"> נושא הצעה לסדר </p>
          <input type="text" id="subjectlbl" name="subjectlbl" placeholder="" />

          <p id="oferlbl2"> דברי החבר: </p>
          <textarea id="subjectTxt" name="subject" placeholder="" ></textarea>

        </div>
        <div className="absolute22">
          <p id="oferlbl3"> חכים רלוונטיים </p>
          <select type="dropbox" size="7" id="drpbx1" name="drpbx1" placeholder="sadsad">
            <option id="op1"> </option>
            <option>אבי משה</option>
            <option>גרמן יעל</option>
            <option>דיין יעל</option>
            <option>דיכטר אבי</option>
            <option>דרעי מכלוף</option>
            <option>האוזר אבי</option>
            <option>הנגבי צחי</option>
            <option>1</option>
            <option>2</option>
            <option>1</option>
            <option>2</option>
          </select>
          <br></br>
          <button onClick={SendForm} id="submitBtn">שלח</button>


        </div>
      </div>

      <div className="footer">
        <div className="hdr">

          <div className="header-right3">
            <span className="active" href="#"> דף הבית</span>
            <span>|</span>
            <span href="#contact">חכ"ים וסיעות</span>
            <span>|</span>
            <span href="#about">ועדות</span>
          </div>
        </div>
      </div>
    </div >
  );
}

export default OneComp;

function newFunction(title, Items1) {
  title = Items1[0];
  title = title.toString().replace("block", "").replace("s,", "").replace(",,", "");
  return title;
}

function ItemsRefact(items) {
  let result = items.filter(word => word.length > 4);
  let t3 = result.toString().split("\\");
  let t4 = t3.toString().replace('"', "").replace(',,', "").replace(",,", "").replace(",.,,", "");
  t4 = t4.split("title");
  let t6 = t4.toString().replace("title,,", "").replace(",,title,,", "").replace(",,title", "").replace("title", "").replace(".,,,,,", "").replace(".,,,,,", "");
  let t7 = t6.toString().replace("text,", " | ").replace(",,text,,", " | ").replace(",,text", " | ").replace("text", " | ");
  let Items1 = t7.toString().replace("[", "").toString().split(" | ");
  //title = title.toString().substr(1,4);
  Items1.push(t6);
  return Items1;
}

async function postData() {
  try {
    let res = await fetch("http://localhost:9000/testAPI", {
      method: 'post',
      mode: 'no-cors',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        key1: 'myusername'
      })
    });
    console.log('result' + res + window.location.href);
    window.onload = function () {
      if (!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
      }
    }

  }
  catch (e) {
    console.log(e)
  }
}
