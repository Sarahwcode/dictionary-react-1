import React, {useState} from "react";
import axios from "axios";
import Results from "./Results"
import './Dictionary.css';

export default function Dictionary (){
    let [words, setWords] = useState("");
    let [ define, setDefine] = useState(null);


    function handleResponse (response) {
        console.log(response.data);
setDefine(response.data);
    }
    function search(event){
    event.preventDefault();
   
    let apiKey = "145ba0dc50b14bt75oafffd6a19b4a36";
    let api = `https://api.shecodes.io/dictionary/v1/define?word=${words}&key=${apiKey}`;
    axios.get(api).then(handleResponse);
}

    function wordChange(event)
    {
        setWords(event.target.value)
    }


    

    return (
        <div className="text-center mb-3 mt-5">
            <form onSubmit={search}>
                <input type="search" autoFocus onChange={wordChange} className="search" placeholder="Enter your word...."></input>
                <div>
                <input className="btn btn-dark mt-3" type="submit"></input>
                </div>
            </form>
            <div>
            <Results definition = {define}/>
            </div>
        </div>
    );
}