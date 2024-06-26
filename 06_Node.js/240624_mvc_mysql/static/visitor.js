const tbody = document.querySelector('tbody');
const buttonGroup = document.querySelector('#button-group');


//폼의 [등록]버튼 클릭시 -> POST/visitor 요청
function createVisitor() {
    console.log('click 등록 btn ');
    
    const form = document.forms['visitor-form'];
    
    axios({
        method:'POST',
        url : '/visitor',
        // 추가하려는 정보를 req.body에 실어서 보냄
        data : {
            name : form.name.value,
            comment : form.comment.value
        }
    }).then((res)=>{
        console.log(res);
        

        const  { data } = res; 
        // js 문법
        const html = `
            <tr id="tr_${data.id}">
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.comment}</td>
            <td><button type="button" onclick="editVisitor(${data[i].id})">수정</button></td>
            <td><button type="button" onclick="deleteVisitor(this,${data.id});">삭제</button></td>

        `;

    //insertAdjacentHTML : 특정요소에 html 추가
    tbody.insertAdjacentHTML('beforeend',html)
    })

}

// [삭제]버튼 클릭시 
// 테이블에서 해당 행 삭제
function deleteVisitor(obj,id) {
    console.log(obj); // 클릭한 삭제 버튼
    console.log(id); //행의 id

    // console.log(confirm('정말 삭제하시겠습니까?'));
    if(!confirm('정말 삭제하시겠습니까?')) { // !false : 취소버튼 클릭
        return ; // deleteVisitor 함수종료 하겠다는 의미 -> 백으로 요청 X
    }

    axios({
        method : 'DELETE',
        url : '/visitor',
        data : {
            id  // id : id
        }
    }).then((res)=>{
        console.log(res.data);
        if(res.data.result){
            // alert('삭제 성공!');
            // obj.parentElement.parentElement.remove();
            obj.closest(`#tr_${id}`).remove();  
            // closest : 해당 선택자를 선택

        }
    })
}

// [수정]버튼 클릭시 
// - form input 에 value 넣기 
// - [변경], [취소] 버튼 보이기
function editVisitor(id) {
    axios({
        method:'GET',
        url : `/visitor/${id}`
    }).then((res) =>{
        console.log(res.data);

        const {name, comment} =  res.data;
        const form = document.forms['visitor-form'];
        form.name.value = name;
        form.comment.value = comment;
     })
     const html = `
        <button type="button" onclick="editDo(${id});">변경</button>
        <button type="button">취소</button>
     `
     buttonGroup.innerHTML = html;   
}

//[변경] 버튼 클릭시 
// -데이터 수정 요청
function editDo(id) {
    const form = document.forms['visitor-form'];
    axios({
        method:'PATCH',
        url:'/visitor',
        data:{
            id, // id:id
            name : form.name.value,
            comment:form.comment.value
        }
    }).then((res)=>{
    console.log(res.data);
    if(res.data.result){
        alert('수정 성공!')
        const children = document.querySelector(`#tr_${id}`).children;
        children[1].textContent= form.name.value; //이름 값 변경
        children[2].textContent= form.comment.value; //댓글 값 변경

    }
})
}