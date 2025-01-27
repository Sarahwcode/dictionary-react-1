import React from "react";

export default function Synonyms (props) {

        if (props.Synonyms){
           
            return ( 
                <section> 
                <ul>
        {props.Synonyms.map ((Synonym, index) => (
           
<li key={index}>
    {Synonym}
</li>
              
        )
    )
        }
       </ul>
       </section> 
    );
} else {
    return null;
}
   
}