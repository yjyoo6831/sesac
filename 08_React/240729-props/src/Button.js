import "./Button.css";
import PropTypes from 'prop-types';
//props.children
// : 부모 컴포넌트에서 자식 컴포넌트 호출 시 태그 사이에 적용
// 문자열, 숫자, JSX, 배열 등 다양한 형태.

const Button = (props) => {
    console.log("btn props >> ",props);
    const {link,children} = props;
  return (
    <>
      {/* 구조분해 할당 하지 않을 경우 props. 으로 접근
       <a href='{props.link}'> */}
      <a href='{link}'>
        <button className="Button">{children}</button>
      </a>
    </>
  );
};

Button.defaultProps= {
    children : '네이버',
    link : 'https://www.naver.com',
};

Button.defaultProps = {
    children : PropTypes.string,
    link : PropTypes.string,
}



export default Button;
