import React, { useState } from 'react';

const Alphabet = () => {
    // 배열 ex
    const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a']);

    // 객체 ex
    const [alphaObject, setAlphabetObject] = useState([
        { id: 1, alpha: 'a' },
        { id: 2, alpha: 'b' },
        { id: 3, alpha: 'c' },
        { id: 4, alpha: 'd' },
    ]);

    const [inputAlpha, setInputAlpha] = useState('');

    // 글자 추가
    const addAlpha = () => {
        // Q. input 이 빈 값이라면 alphabet 상태가 변경되지 않도록 하기
        console.log('>>> ', inputAlpha);

        if (inputAlpha.trim().length === 0) {
            alert('빈 칸입니다 입력값을 넣어주세요');
            return;
        }
    };
        // activeEnter();

        // * concat
        // - 기존 배열을 변경하지 않고, 주어진 배열이나 값들을 새로운 배열로 결합하여 반환.

        // ex)
        // let arr1=[1,2,3];
        // let arr2=[5,6,7];
        // let arr3=arr1.concat(arr2);  // 리액트는 불변성 유지를 위함.

        //console.log(arr3); // [1,2,3,5,6,7];
        const newAlpha = alphaObject.concat({
            id: alphaObject.length + 1,
            alpha: inputAlpha,
        });

        // 엔터키 입력하면 추가되도록
        const activeEnter = (e) => {
            console.log('e >> ', e);

            if (e.key === 'Enter') {
                addAlpha();
            }
            
        };

        setAlphabetObject(newAlpha);
        setInputAlpha(''); // 입력 칸 초기화

        //글자 삭제 
        const deleteAlpha = (targetId) => {
            console.log("targetId > " ,targetId); // targetId : 삭제될 요소의 Id
            
            const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);
            setAlphabet(newAlpha);
        }
    
    return (
        <div>
            <h1>Map & Filter</h1>
            <ol>
                {/* 배열 ex */}
                {/* return 키워드 x, 중괄호 x */}
                {/* {alphabet.map((value, idx) => (
                <li key={idx}>{value}</li>
            ))} */}

                {/* 배열 ex */}
                {/* return 키워드 o */}
                {/* {alphabet.map((value, idx) => {
                return <li key={idx}>{value}</li>;
            })} */}

                {/* 객체 ex */}
                {alphaObject.map((value) => (
                    <li key={value.id}>{value.alpha}</li>
                ))}
            </ol>

            {/* 알파벳 추가해보기 */}
            <input
                type="text"
                placeholder="알파벳 입력"
                value={inputAlpha}
                onChange={(e) => {
                    setInputAlpha(e.target.value);
                }}
                onKeyDown={activeEnter}
            ></input>

            {/* Q2) input 에서 enter 키 누르면 추가되도록 ! */}
            <button onClick={addAlpha}>입력</button>

            {/* 알파벳 삭제해보기 */}
            <ol>
                {alphaObject.map((val) => {
                    <li key={val.id} onDoubleClick={() => deleteAlpha(val.id)}>{val.alpha}</li>
                })}
            </ol>
        </div>
    );
};
export default Alphabet;
