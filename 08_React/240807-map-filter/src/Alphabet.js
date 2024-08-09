import React, { useState } from 'react';

export default function Alphabet() {
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
        setAlphabetObject(newAlpha);
        setInputAlpha(''); // 입력 칸 초기화
    };
    //글자 삭제
    const deleteAlpha = (targetId) => {
        console.log('targetId > ', targetId); // targetId : 삭제될 요소의 Id

        const newAlpha = alphaObject.filter((alpha) => alpha.id !== targetId);
        setAlphabetObject(newAlpha);
    };

    // 엔터키 입력하면 추가되도록
    const activeEnter = (e) => {
        console.log('e >> ', e);

        if (e.key === 'Enter') {
            addAlpha();
        }
    };
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
                onKeyDown={(e) => activeEnter(e)}
            ></input>

            {/* Q2) input 에서 enter 키 누르면 추가되도록 ! */}
            <button onClick={addAlpha}>입력</button>

            {/* 알파벳 삭제해보기 */}
            <ol>
                {alphaObject.map((value) => (
                    <li
                        key={value.id}
                        onDoubleClick={() => deleteAlpha(value.id)}
                    >
                        {value.alpha}
                    </li>
                ))}
                
            </ol>
        </div>
    );
}

/*
onDoubleClick={() => deleteAlpha(value.id)}

1. deleteAlpha(value.id)
 - deleteAlpha 함수를 즉시 실행하고 , 그 결과 값을 반환하도록 한다. 
 - 반환된 결과 값이 onDoubleClick에 전달됨.

 - 삭제 로직일 뿐, 반환값이 없기 때문에 undefined일 확률이 높다. 
 -> 즉시 실행 : 컴포넌트가 렌더링 되는 시점에 deleteAlpha(value.id)가 바로 실행된다. 

 - value.id 라는 인자를 함수에 전달하면서 함수를 실행
 
2. () => deleteAlpha(value.id)
-  () => deleteAlpha(value.id) 라는 함수 호출을 나중에 실행하도록 준비해둔 "함수 참조"이다. 

- 나중에 실행 : 컴포넌트가 렌더링 될 때, 이 함수는 실행되지 않고, 이벤트가 발생할 때만 실행된다. 
- value.id라는 인자가 이벤트가 발생할 때, deleteAlpha 함수에 전달되면서 실행된다.

- 필요성 : 인자를 넘겨주는 함수 호출을 연기하기 위해 화살표 함수, 즉 콜백함수 형태로 작성해야한다.

3. deleteAlpha 함수 호출에서 인자 없이 사용하면 ? 
 - 그냥 deleteAlpha 라고만 작성 할 수 있다. 
 - 이 경우에도 함수는 참조로서 전달된다. 
 - 인자를 넘겨줄 필요가 없으므로, 화살표 함수로 감쌀 필요도 없다. 

 요약 ---
 deleteAlpha(value.id) : 즉시 작동한다. 
 () => deleteAlpha(value.id) : 이벤트 발생시 작동된다.  인자를 넘겨줄 때 사용
 deleteAlpha  : 인자가 필요 없을 때, 그냥 함수 이름 작동된다.
*/ 