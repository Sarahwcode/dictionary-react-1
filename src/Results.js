import React from "react";
import Meanings from "./Meanings";
import "./Results";

export default function Results (props)
{
   
    if (props.definition) {
    return (
    <div>
        <section>
<h1>{props.definition.word}</h1>

<h2>{props.definition.phonetic}</h2>
</section>

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