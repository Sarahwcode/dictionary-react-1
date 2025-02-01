import React from "react";
import "./Images.css";

export default function Images (props) {
  
    if (props.photos)
    {
        return (
        <section className="row">
            {props.photos.map ((photos, index) => (
             
                <div key={index} className="col-4 images">
                    <a href={photos.src.original} target="_blank" rel="noreferrer">
                <img src={photos.src.landscape} className="img-fluid" alt=""></img>
                </a>
                </div>
              
           ) )}
        </section>
        
        );
    }
else {
    return null;
}
}