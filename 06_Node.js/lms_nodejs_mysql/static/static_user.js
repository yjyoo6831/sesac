// 프앤 함수 선언부분
//  /user/siginup 등록 버튼 클릭시  

function createUser() {
    console.log('등록 버튼 click.');
    const form=document.forms['form_signin'];
    axios({
        method:'POST',
        url:'/user/signup',
        data:{
            id:form.id.value,
            pw:form.password.value,
            name:form.name.value
        }
    }).then((res)=>{
        // console.log(res);
        const {data} = res;
        console.log(data);
    })
}