import React, {useEffect} from 'react'

export default function UseTitle(t) {
    useEffect(()=> {
        // mount 시 실행되는 구간
        const prevTitle = document.title;
        document.title=t;
        
        return () => (document.title= prevTitle);
        // unMount 시 실행 구간 

    },[t]); //t 이 변경 될 때 마다 문서의 제목을 업데이트 함.
}

//페이지의 제목을 동적으로 설정
// 컴포넌트가 언마운트 될 때 이전 제목으로 복원하는 기능
