import React, {useState} from "react";
import axios from "axios";
import Results from "./Results"
import './Dictionary.css';

export default function Dictionary (props){
    let [words, setWords] = useState(props.keyWord);
    let [ define, setDefine] = useState(null);
    let [load, setLoaded] = useState(false);


    function handleResponse (response) {
        
setDefine(response.data);
    }
    function search(){
   
    let apiKey = "145ba0dc50b14bt75oafffd6a19b4a36";
    let api = `https://api.shecodes.io/dictionary/v1/define?word=${words}&key=${apiKey}`;
    axios.get(api).then(handleResponse);
}
function handleSubmit(event)
{
    event.preventDefault();
    
    search()
}
function loaded () {
    setLoaded(true)
    search()
}

    function wordChange(event)
    {
        setWords(event.target.value)
    }


    
if (load) {
    return (
        <div className="text-center mb-3 mt-5 dictionary ">
            <section>
            <form onSubmit={handleSubmit}>
                <input type="search" autoFocus onChange={wordChange} className="search" placeholder="Enter your word...."></input>
                <div>
                <input className="btn btn-dark mt-3" type="submit" title="Search" value="Search" ></input>
                </div>
            </form>
            </section>
            <div>
            <Results definition = {define}/>
            </div>
            
        </div>
    );}
    else {
        loaded();
        
    }
}