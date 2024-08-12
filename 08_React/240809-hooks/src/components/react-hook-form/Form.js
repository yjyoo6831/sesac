// hook을 사용하니 함수형 컴포넌트 rfc
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
    const {
        register, // input 할당, value 변경 감지
        handleSubmit, // form submit 시 호출
        formState: { errors }, // 폼 상태 객체
        watch, // 특정 폼 필드의 값을 실시간으로 사용
    } = useForm();

    // handleSubmit(func A [, funcB]) - 두 개의 함수를 받는다.
    // func A : 필수값 , 유효할 때 실행
    // func B : '선택' , 유효하지 않을 때 실행

    // Func A
    const onValid = (data) => {
        console.log('onValid', data);
    };
    // Func B
    const onInValid = (data) => {
        console.log('onInValid', data);
    };

    console.log('err >> ', errors);
    console.log('watch >> ', watch('username'));

    return (
        <div>
            <h1>react-hook-form 라이브러리 데모</h1>
            <form onSubmit={handleSubmit(onValid, onInValid)}>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="username"
                    // register 함수 -
                    // 필드명 : 'username' , 유효성 검사 규칙 : required,minLength
                    // 'username'이라는 input 필드를 RHF(react-hook-form)에 등록
                    {...register('username', {
                        required: '이름은 필수 항목입니다.',
                        minLength: {
                            message: '이름은 최소 4글자 이상 작성해주세요.',
                            value: 4,
                        },
                    })}
                />
                {errors.username?.message}
                {/* // 조건부 렌더링과 '옵셔널 체이닝'을 활용하여 폼 필드의 오류 메시지를 표시하는 방법 */}
                {/* errors  : formState 객체 중 하나
                    - 각 폼 필드에 대한 오류 메시지를 담고, 유효성 검사가 실패한 경우에만 해당 필드에 오류 메시지가 저장됨.
                */}
                {/* 옵셔널 체이닝 연산자 '?.' => js 에서 객체의 속성에 접근할 때 , 해당 속성이 존재하는지 확인하고, 
                    없을 경우 undefined를 반환하는 연산자 
                    cf) 여기서는 username 값이 없으면 .message를 반환한다.    
                */}
                <br></br>
                <input
                    type="email"
                    name=""
                    id=""
                    placeholder="email(gmail)"
                    {...register('email', {
                        required: '이메일을 입력해주세요.',
                        validate: {
                            //useGmail : type  v.includes('gmail.com) || message
                            useGmail: (v) => v.includes('gmail.com') || 'gmail로만 가입 가능합니다.',
                        },
                        pattern: {
                            value: '/^@,',
                            message: '유효한 이메일 주소를 입력해주세요.',
                        },
                    })}
                />
                {/* validate 
                    React Hook Form 에서 제공하는 유효성 검사 옵션 중 하나, 
                    폼 필드에 대해 커스텀 유효설 검사를 수행할 수 있도록 한다. 
                    함수 or 함수들을 포함하는 객체를 받을 수 있다. 
                */}
                {/* validate가 객체로 사용될 경우,
                    객체의 각 속성에 대해 개별적인 유효성 검사를 수행 할 수 있습니다. 
                    각 속성은 함수 형태로 정의되며, 이 함수들이 개별적인 유효성 검사 규칙을 적용합니다. 
                */}
                {/* useGmail 
                    validate 옵션의 객체 내부에서 useGmail이라는 이름의 함수로 정의하고, 특정 유효성 검사 규칙을 설정한다.
                */}
                {/* v : 사용자가 email 필드에 입력한 값 (이멜 주소)를 의미*/}
                {errors.email?.message}
                <br />
                <input type="password" name="" id="" placeholder="password" {...register('password')} />
                <button type="submit">제출</button>
            </form>
        </div>
    );
}
