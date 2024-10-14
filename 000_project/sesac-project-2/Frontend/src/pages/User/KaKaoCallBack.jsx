import { useEffect } from "react";
import axios from "axios";

const KaKaoCallBack = () => {
    
    useEffect(()=>{
        const code = new URL(window.location.href).searchParams.get("code");
        console.log("code > " , code);    
        const grant_type='authorization_code';
        const REST_API_KEY=process.env.REACT_APP_REST_API_KEY;
        const REDIRECT_URI=process.env.REACT_APP_REDIRECT_URI;
        axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
            {},
            {
                headers:{
                    "Content-type": 
                    "application/x-www-form-urlencoded;charset=utf-8",
                },
            },
        ).then((res)=>{
            const {data} = res;
            const {access_token} = data;
            if(access_token){
                console.log("data :: ",data);
                console.log(`Bearer ${access_token}`);
                const result = axios.get(`https://kapi.kakao.com/v2/user/me`,
                    {
                        headers:{
                            "Authorization" : `Bearer ${access_token}`,
                            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                        },
                    },  
                ).then((res)=>{
                    const userData = res.data;
                    console.log("성공 >> ", res);
                    axios.post(`http://localhost:8000/api/auth/kakao/login`, userData,
                        {
                        headers:{
                            "Authorization" : `Bearer ${access_token}`,
                            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                        },
                    },
                    ).then((res)=>{
                        console.log("백엔드 응답 성공", res.data);
                        console.log("access_token > ", access_token);
                    })
                });
                
            }
        });
    },[]);
    return(
        <>
            <div>토큰 받기 화면</div>
        </>
    );
};

export default KaKaoCallBack;