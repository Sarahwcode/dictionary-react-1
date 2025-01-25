import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {

    return (  
        <div>
        <h3>{props.meanings.partOfSpeech}</h3>
       
        <p>Definition{props.meanings.definition}</p>
       
        <p><em>Example: {props.meanings.example}</em></p>
        <Synonyms Synonyms = {props.meanings.synonyms}/>
       
        </div>
          
          
    );
}