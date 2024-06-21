console.log("!!!");


function uploadDynamic() {
    
   // FormData 객체 
   // : 폼 전송할떄, 멀티미디어 파일을 비동기로 제출하고 싶다면, FormData 객체를 이용
    const formData = new FormData();

    // 폼 요소를 선택
    const fileInput= document.querySelector("#dfile");
    const fileText= document.querySelector("#anno");
    // console.dir(fileInput);

    // FormData에 업로드한 파일 정보 추가
    formData.append('dfile',fileInput.files[0])
    formData.append('anno',fileText.value)
    // console.log(formData); // 특수한 형태의 객체이기 때문에 쉽게 출력이 안된다. 

    //서버로 요청 보내기 
    axios({
        method : "post",
        url : '/dynamic',
        data : formData,
        
        //key 
        headers : {
            'Content-Type' : 'multipart/form-data',
        }
    }).then((res)=>{
        
        // 서버의 req.file 을 클라이언트의 res변수가 받음
        console.log("res ",res.data);
        // console.log(res.data.path); //이미지 주소
        document.querySelector('img').src = `/${res.data.file.path}`
        document.querySelector('img').classList.add('thumbnail')
        document.querySelector('.ddd').textContent = res.data.body.anno;
        // fileText.textContent = res.data.body.anno
    })
}
