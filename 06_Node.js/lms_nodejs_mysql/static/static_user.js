// 프앤 함수 선언부분

//  회원가입 페잊 /user/signup 등록 버튼 클릭시  
function createUser() {
    console.log('등록 버튼 click.');
    const form=document.forms['form_signup'];
    
    axios({
        method:'POST',
        url:'/user/signup',
        // signup 의 form.'name_value '.value로 갖고옴
        data:{
            userid:form.userid.value,
            pw:form.pw.value,
            name:form.name.value
        }
    }).then((res)=>{
        console.log("static/static_user.js >> ", res);
        const {data} = res; //data : data
        alert('회원 가입 성.공.!')
        document.location.href='/user/signin';
    })
}

//  로그인 페이지 /user/signin 로그인 버튼 클릭시  
function checkUser() {
    console.log('login 버튼 click.');
    const form=document.forms['form_signin'];
    axios({
        method:'POST',
        url:'/user/signin',
        data:{
            userid:form.userid.value,
            pw:form.pw.value
        }
        
    }).then((res)=>{
        console.log("/static/checkUser > ", res);
    })

}


