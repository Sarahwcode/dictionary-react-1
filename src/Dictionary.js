import React, {useState} from "react";



export default function Dictionary (){
    let [words, setWords] = useState("")

    function search(event){
    event.preventDefault();
    alert (`${words}`);}

    function wordChange(event)
    {
        setWords(event.target.value)
    }
    return (
        <div>
            <form onSubmit={search}>
                <input type="search" autoFocus onChange={wordChange}></input>
                <input type="submit"></input>
            </form>
        </div>
    );
}