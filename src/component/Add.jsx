import React ,{useState} from "react";
import Axios from "axios";
import { rawListeners } from "../../../backEnd/dataBase";

var Add =()=>{
    // const[datta,setDatta]=useState(data)
    const [language,setLanguage]=useState("")
    const [url,setUrl]=useState("")
    const [description,setDescription]=useState("")
    var add =() =>{
        Axios.post("http://localhost:3000/resorces"?{language,
        url,
        description})
        .then((res)=>{
         console.log(res);
        })
    }

    return(
        <div>
        <input  placeholder="type your language"  onChange={(e)=>{
            setLanguage(e.target.value)
        }}/>
        <input placeholder="type the URL"  onChange={(e)=>{
            setUrl(e.target.value)
        }} />
         <input placeholder="type the description"  onChange={(e)=>{
            setDescription(e.target.value)
        }} />
         <button  onClick={()=>{
            return add();
         }} >Add Source</button>
        </div>
    )
}


export default Add