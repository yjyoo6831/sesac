import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Label } from 'flowbite-react';
import { Input } from '../../shared/input';
import KaKaoCallBack from './KaKaoCallBack';

const LoginPage = ({
  navigate,
  handleSubmit,
  setEmail,
  setPassword,
  error
}) => {
  
  const goKaKaoLogin = async () => {
    const REST_API_KEY=process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI=process.env.REACT_APP_REDIRECT_URI;
    console.log("REST_API_KEY > ", REST_API_KEY);
    console.log('REDIRECT_URI > ', REDIRECT_URI);
    
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    console.log('kakaoURL > ', kakaoURL);
    window.location.href = kakaoURL;
    }

  return (
    <main className="bg-gray-50">
      <div className="flex justify-between items-center px-2 pt-4 sm:px-5 sm:pt-4">
        <img
          src="/images/back.png"
          alt="back"
          onClick={() => navigate(-1)}
          className="w-5"
        />
      </div>
      <div className="flex justify-center items-center min-h-screen px-4">
        <form
          className="flex flex-col gap-4 w-full max-w-lg mx-auto"
          onSubmit={handleSubmit}
        >
          <Link to="/">
            <div className="flex flex-col items-center justify-center">
              <img src="/images/logo.png" alt="" className="w-1/4 flex " />
              <p className="text-4xl font-bold">Smile Hub</p>
            </div>
          </Link>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email"
                value="아이디(이메일)"
                className="text-lg font-semibold"
              />
            </div>
            {/* <input
              id="email"
              type="email"
              placeholder="example@naver.com"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            /> */}
            <Input
              id="email"
              type="email"
              placeholder="example@naver.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password"
                value="비밀번호"
                className="text-lg font-semibold"
              />
            </div>
            <Input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            /> */}
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-lg font-semibold bg-[#FEE715] text-[#101820] hover:bg-[#101820] hover:text-[#FEE715] transition"
          >
            로그인
          </button>
          <img src='../../../images/kakao_login_medium_narrow.png' 
          className="w-56 h-12 items-center"
          onClick={goKaKaoLogin}></img>          
          <div className="flex justify-end">
            <p className="mr-2">아직 회원이 아니신가요?</p>
            <Link to="/register" className="font-semibold">
              회원가입
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
export default LoginPage;