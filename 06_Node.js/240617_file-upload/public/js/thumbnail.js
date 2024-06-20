console.log("!");

function uploadThumbnail() {
    const id=document.querySelector("#id");
    console.log(id);

    const formData = new FormData();

    // 폼 요소를 선택
    const fileInput= document.querySelector("#thumbnail");
    console.dir(fileInput.files);

    // FormData에 업로드한 파일 정보 추가
    formData.append('thumbnail',fileInput.files[0])
    // console.log(formData); // 특수한 형태의 객체이기 때문에 쉽게 출력이 안된다. 

    //서버로 요청 보내기 
    axios({
        method : "post",
        url : 'dynamicFile',
        data : formData,
        //key 
        headers : {
            'Content-Type' : 'multipart/form-data',
        }
    }).then((res)=>{
        // 서버의 req.file 을 클라이언트의 res변수가 바음
        console.log(res);
        console.log(res.data.path); //이미지 주소
        document.querySelector('img').src = `/${res.data.path}`
    })

}