import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {

    return (  
        <div>
            <section> 
        <h3>{props.meanings.partOfSpeech}</h3>
        </section> 
        <section> 
        <p>Definition{props.meanings.definition}</p>
        </section> 
        <section> 
        <p><em>Example: {props.meanings.example}</em></p>
        </section> 
        <Synonyms Synonyms = {props.meanings.synonyms}/>
       
        </div>
          
          
    );
}