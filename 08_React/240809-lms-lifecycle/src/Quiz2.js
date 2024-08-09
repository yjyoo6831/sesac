import React ,{useState, useEffect} from 'react'
import axios from "axios"

export default function Quiz2() {
    
        const [data, setData] = useState([]);
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setData(res.data))
        
        return (
          <div>
            <h1>Quiz2</h1>
            {data.map((v,i) => {
              return (
                <div style={{backgroundColor:"skyblue",borderRadius:"10%"}}>
                  <h3>Title : {v.title}</h3>
                  <div style={{color:"red"}}>ID = {v.userId}</div>
                     <div style={{color:"purple"}}>idx = {v.id}</div>
                  <div>{v.body}</div>
                </div>
              )
            })}
          </div>
        )
      

}

