import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {

    return (  
        <div>
            <section> 
        <h3>{props.meanings.partOfSpeech}</h3>
        
        <p><strong>Definition: </strong>{props.meanings.definition}</p>
        
        <p> <strong>Example: </strong><em> {props.meanings.example}</em></p>
       
        <Synonyms Synonyms = {props.meanings.synonyms}/>
        </section> 
        </div>
          
          
    );
}