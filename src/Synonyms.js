import React from "react";
import "./Synonyms.css";

export default function Synonyms (props) {

        if (props.Synonyms){
           
            return ( 
              
                <ul className="ml-0  synonym" >
        {props.Synonyms.map ((Synonym, index) => (
           
<li key={index}>
    <div><strong>Synonyms: </strong></div>
{Synonym}
</li>
              
        )
    )
        }
       </ul>
       
    );
} else {
    return null;
}
   
}