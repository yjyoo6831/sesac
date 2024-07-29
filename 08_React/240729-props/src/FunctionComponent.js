// 함수형 컴포넌트
// 직관적으로 함수 이름 만들고, 보여줄 html 요소 return 문에 작성.
// + 화살표 함수(함수표현식)으로 작성가능하고, 함수 선언문으로 작성해도된다.

import propTypes from 'prop-types';

const FunctionComponent = (props) => {
  console.log("Function props >> ", props); // {name : 'xxx'}
  const { name } = props;
  const teacher = "Joyce";

  return (
    <>
      <h1>Hi ~ {teacher} </h1>
      <p>여기는 Functional Component! </p>
      {/* props 사용할 때 */}
      {/* <p>새로운 컴포넌트의 이름은 <b>{props.name}</b></p> */}
      <p>
        새로운 컴포넌트의 이름은 <b>{name}</b>
      </p>
    </>
  );
};

//defaultProps : 부모 컴포넌트에서 props를 미전달시 기본 값을 보여줄 props 설정
// FunctionComponent.defaultProps = {
//     name : '야호'
// }

// propTypes : 컴포넌트의 필수 props 를 지정 or props 타입을 지정할 때 사용
// TypeScript 가 아닌 JS 의 '유연한 특성' 때문에 문제가 생길 수 있다. -> 이를 해결하기 위해 권장

//위의 defaultProps 가 없어야 isRequired 동작을 한다.
FunctionComponent.propTypes ={
    // 프로퍼티의 자료형을 객체 형태로 지정하여 FunctionComponent.propTypes 에 저장
    name : propTypes.string.isRequired
    // 'string' 타입이자 '필수값'으로 지정.
    // props가 반드시 제공되어야 함을 의미 
}
export default FunctionComponent;

//리액트 18부터, React.StrictMode가 기본적으로 활성화 된다.
// 이는 개발 모드에서 컴포넌트의 렌더링과 라이플사이클(생명주기) 메서드가 두 번 호출되도록 하여,
// 부작용을 테스트하고 식별하는 데 도움을 줍니다.
// 이로 인해서 console.log가 두 번 찍힐 수 있습니다.
