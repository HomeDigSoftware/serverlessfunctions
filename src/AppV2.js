import './App.css';
import React, { Component, useState } from 'react';
//import fetch from "node-fetch"


export default function AppV2(){
    const [data , setData] = useState();
    const [show , setShow] = useState(false);

   

    return(
        <div>
                <h1>testing serverless functions</h1>
                <h3>on a react app </h3>
                <button style={{width: "200px" , height: "100px" , fontSize:"38px" , fontWeight:"800"}}
                 onClick={()=> setShow(!show)}>click me</button>
                <p>the message : {data !== "" ? data : ""}</p>
               {show? <div><GetApi data={data} setData={setData} /></div> : <div> </div>}
        </div>
    )
}

function GetApi({data  , setData}){

    onGetData(setData) 

    return(
        <div>
           {/* lets try it  */}
        </div>
    )
}

async function onGetData(setData){
    console.log("start")
    const server_response = await fetch('/.netlify/functions/testing')
    //  .then(server_response => server_response.text);
    const theData = await server_response.text();
    console.log(theData);

    // console.log(JSON.parse(server_response))
    // let myText = await myObject.text();
    // myDisplay(myText);

   //setdata(JSON.stringify(server_response))
    setData(theData);
} 

