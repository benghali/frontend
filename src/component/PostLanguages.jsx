import React ,{useState} from "react";
import  Axios from "axios"



const PostLanguages = ({ data }) => {

    const [check,setCheck]=useState(false)
    var del = (id)=>{
        Axios.delete(`http://localhost:3000/resorces/${id}`)
        .then((res)=>{
          console.log("oh you deleted me ")
        })
        .catch(err=>{
          console.log(err)
        })
        window.location.reload(false);
       }
          return (
              <div>
            {data.map((element) => {
              return (
                <div key={element.id}>
                  
                   {check===false ? <ul onClick={()=>{
                  
                      setCheck(!check)
                   }}><img src={element.url} /></ul> :
                   (
                      <div>
                        <ul>
                      <li    onClick={()=>{
                          setCheck(!check)
                      }}> <img src={element.url} /></li>
                      <li> <h1>Languages:</h1>
                        {element.language}</li>
                      <li> </li>
                      <li><h1>description:</h1>{element.description}</li>
                      </ul>
                      </div>
                   )}
      
                  
                </div>
              );
            })}
              </div>
          )
}
export default PostLanguages


    // console.log(data, "hhhhh");
    // deleteId = (id) => {
    //     Axios.delete(`http://localhost:3000/resorces/${id}`)

    //         .then(() => {
    //             console.log('Delete successful')
    //         })
    //         .catch(err => { console.log(err); })
    //     window.location.reload(false);
    // }

    // return (
    //     <div>
    //         {data.map((element) => (
    //                 <div key={element.id}>
    //                     <ul >
    //                         <li>{element.language} <span ><button onClick={(() => { return deleteId(element._id) })} style='font-size:100px' >&#10060;</button></span></li>
    //                         <li>{element.url}</li>
    //                         <li>{element.description} </li>
    //                     </ul>
    //                 </div>
    //             )

    //         )}

    //     </div>

    // )
// }
