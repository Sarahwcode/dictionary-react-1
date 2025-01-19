import React from "react";
import Meanings from "./Meanings";
export default function Results (props)
{
   
    if (props.definition) {
    return (
    <div>
<h2>{props.definition.word}</h2>
{props.definition.meanings.map(function (meaning, index){
    return (
<div key={index}> 
<Meanings meanings = {meaning}/>
</div>
    );

    
} )}

    </div>)}
    else {
        return null;
    }
    

}