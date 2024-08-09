import React ,{useEffect} from 'react'
import axios from "axios"

export default function Quiz2() {
    axios.get('')
        .then((Response)=>JSON.stringify(Response.data))
        .catch((Error)=>console.log(Error))
    let data;
    let getData;
    useEffect(() => {
     getData = async () => {
        try {
            data = await axios.get("https://jsonplaceholder.typicode.com/posts");
            console.log(data);
        }catch (error) {
            console.error(error);
            
        }
        
    };
    }, []);
     

  return (
    <>
        <h1>Quiz2</h1>
        <ul><li>{getData}</li></ul>
    </>
  )
}
