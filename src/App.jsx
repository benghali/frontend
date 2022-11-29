import React,{useState,useEffect}from 'react'
import Axios from 'axios'
import PostLanguages from './component/PostLanguages.jsx'

import Add from "./component/Add.jsx"



const App=()=>{
const [data,setData]= useState([])
 
useEffect(()=>{
Axios.get("http://localhost:3000/resorces")
  .then((res)=>{
  setData(res.data)
  })
},[])

console.log(data);

  return(
    <div> 
<Add data={data}/>
<PostLanguages data={data} />
    </div>
  )
}
export default App