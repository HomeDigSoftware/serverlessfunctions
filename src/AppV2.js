import './App.css';
import React, { Component } from 'react';



export default function AppV2(){

async function onGetData(){
    console.log("start")
    const server_response = await fetch('/.netlify/functions/testing')
    console.log(" the response : ",server_response)
}    

    return(
        <div>
                <h1>testing serverless functions</h1>
                <button style={{width: "200px" , height: "100px" , fontSize:"38px" , fontWeight:"800"}} onClick={()=> onGetData ( console.log("button"))}>click me</button>
        </div>
    )
}