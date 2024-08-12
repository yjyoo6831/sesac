import React  from 'react'
import {useForm} from 'react-hook-form';

export default function Quiz1() {
    const {
        register, // input 할당, value 변경 감지
        handleSubmit, // form submit 시 호출
        formState: { errors }, // 폼 상태 객체
        watch, // 특정 폼 필드의 값을 실시간으로 사용
    } = useForm();

    // Func A
    const onValid = (data) => {
        console.log('onValid', data);
        return data;
    };
    // Func B
    const onInValid = (data) => {
        console.log('onInValid', data);
    };

    console.log('err >> ', errors);
    console.log('watch >> ', watch('age'));

  return (
    <div>
        <form onSubmit={handleSubmit(onValid, onInValid)}>
            <input type="text" 
            name="name" 
            id="" 
            placeholder='name' 
            {...register('name',{
                required:'이름은 필수 항목입니다.',
                minLength:{
                    message:'최소 1글자이상 입력',
                    value:1,
                }
            })}
            />
            {errors.name?.message}
            <br></br>
            <input type="text" name="age" id="" placeholder='age' 
            {...register('age',{
                required:'0이상의 숫자만 입력 가능합니다.',
                pattern: {
                    value: /^[0-9]*$/,
                    message: '0이상의 숫자만 입력하세요!!!!',
                },
            })}/>
            {errors.age?.message}
            <br></br>
            <button type="submit">제출</button>
        </form>
    </div>
  )
}
