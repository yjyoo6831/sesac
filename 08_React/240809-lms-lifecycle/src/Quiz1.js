import React, {useState,useEffect} from 'react'

export default function Quiz1() {
    const [postList,setPostList] = useState('');
    const fakePosts = [
        {
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
        },
        {
          id: 2,
          title: "qui est esse",
          body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
        },
        {
          id: 3,
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
        },
        {
          id: 4,
          title: "eum et est occaecati",
          body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        },
        {
          id: 5,
          title: "nesciunt quas odio",
          body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque",
        },
        
      ];
    useEffect(() => {
      console.log("마운트 됨");
      setTimeout(() => {
        // console.log("b4 > ",postList);
        setPostList(fakePosts);
        console.log("2초 지연 timeout 함수");
        console.log("after> ",postList);
        
        
      },2000);
            
      return () => {
          console.log("언마운트 됨");
      }
    }, [])
    
  return (
    <div>
        <h1>Quiz1</h1>
        <h1 style={{backgroundColor:"skyblue"}}>POST LIST</h1>
        <div>
            { postList.length === 0 ? <h1>Loding...</h1> :
                postList.map(
                (i) => (
                    <div style={{border:"3px",backgroundColor:"pink",margin:"3px",borderRadius:"20%"}}>
                        <br></br>
                        No.{JSON.stringify(i.id)} - {JSON.stringify(i.title)} 
                        <br></br>
                        {JSON.stringify(i.body)}
                    </div>
            )
        )
        }
        </div>

    </div>
  )
}
