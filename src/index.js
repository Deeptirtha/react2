import React from "react";
import  ReactDOM  from "react-dom"
import Card from "./card";
import cards from "./cards";
import Form from "./state";
import "./index.css"
import Numcomponent from "./count";


function fun(val){
return(
    <Card
     link={val.link}
value={val.value}
title={val.title}
render={val.render}/>
)}


ReactDOM.render(
    <>
    <div className="nav">
    <h1>Top Fav Movies</h1>
</div>
<div className="container new">
    {cards.map(fun)}
</div>
<Form/>
<Numcomponent/>
</>




    ,document.getElementById("root"))


