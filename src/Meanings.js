import React from "react";

export default function Meanings(props) {

    return (
        <div>
        <h3>{props.meanings.partOfSpeech}</h3>
        <p>{props.meanings.definition}</p>
        <p>{props.meanings.example}</p>
        <p>{props.meanings.synonyms}</p>
        
        </div>
          
          
    );
}