import React, { useState } from 'react';

export default function Quiz1() {
    const [inputs, setInputs] = useState(
        { 
            username: '' ,
            email: '' ,
        }
    );
    const {username,email} =inputs;

    const stateHandler = (e) => {
        const { name, value } = e.target;
        // console.log('inputs >> ', e.target.username);
        console.log('e.target.value >> ', value);
        setInputs(prevInputs=>({
            ...prevInputs,
            [name]:value,
        }));

    };

    const [infoOb, setInfo] = useState([
        {
            id:1,
            username: '코디',
            email: 'codi@gmail.com',
        },
        {
            id:2,
            username: '거북이',
            email: 'turtle@gmail.com',
        },
    ]);
    // console.log('infoOb.username > ',infoOb[0].username)
    // console.log('infoOb.email > ',infoOb.email)
    const addInfo = () => {
        if ((username.trim().length === 0 ) || (email.trim().length === 0 )) {
            alert('빈 칸입니다 입력값을 넣어주세요');
            return;
        }
        
        setInfo(prevInfo => [...prevInfo, {username,email}]);
        setInputs({username:'',email:''}); 
    };
 //글자 삭제
 const deleteAlpha = (targetId) => {

    console.log('targetId > ', targetId); // targetId : 삭제될 요소의 Id
    // console.log('delete > ',)

    const newAlpha = infoOb.filter((v) => v.id !== targetId);
    setInfo(newAlpha);
};

// 엔터키 입력하면 추가되도록
const activeEnter = (e) => {
    console.log('e >> ', e);

    if (e.key === 'Enter') {
        addInfo();
    }
};
    return (
        <>
            <h1>Quiz1</h1>
            <input
                type="text"
                name="username"
                placeholder="이름"
                onChange={stateHandler} />
            <input 
                type="email" 
                name="email" 
                placeholder="이메일" 
                onChange={stateHandler} />

            <button type="button" onClick={addInfo} onKeyDown={(e) => activeEnter(e)}>
                등록
            </button>
            <br></br>
            <ol>
            {
                infoOb.map( (n,idx) => (
                    <li key={idx} onDoubleClick={() => deleteAlpha(n.id)}> {n.username} : {n.email} </li>
            ))
            }
            </ol>
        </>
    );
}
