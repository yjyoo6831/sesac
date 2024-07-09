// 프앤 함수 선언부분

//  회원가입 페이지 /user/signup 등록 버튼 클릭시  
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
    if(!form.userid.value){
        alert('아이디를 입력해주세요.');
        document.location.href='/user/signin';
        
    }
    else if(!form.pw.value){
        alert('비밀번호를 입력해주세요.');
        document.location.href='/user/signin';
    }
    axios({
        method:'POST',
        url:'/user/signin',
        data:{
            userid:form.userid.value,
            pw:form.pw.value
        }  
    }).then((res)=>{
        alert('로그인 성공!')
        console.log("/static/checkUser > ", res);
        const {data} = res;
        // form.submit();
        document.location.href='/user/profile';
    }).catch(error =>{
        // 안됨.
        alert('로그인 실패!')
        form.reset();
        console.log("로그인 실패 에러 발생 : ",error);
    })
}
//회원 정보 수정
function editProfile(userid) {
    console.log("Edit button click");
    /*
    const form = document.forms['form_userInfo'];
    

    axios({
        method:'POST',
        url: '/user/profile',
        data: {
            userid:form.userid,
            pw:form.pw,
            name:form.name
        }
    }).then((res)=>{
        console.log("res >> ",res);
    })
 */
}

//회원 정보 삭제 
function deleteUser() {
    console.log("delete button click");
    
}



