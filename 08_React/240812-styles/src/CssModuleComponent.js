import React from 'react'
import styles from './styles/cssModule.module.css'

// CSS Module
// 클래스명 중복 방지
export default function CssModuleComponent() {
    console.log(styles); // 새로운 고유 번호를 부여
  return (
    <div className={styles.container}>
        <div className={[styles.box, styles.red].join(' ')}>1</div>
        {/* 두 클래스를 동시에 적용하기 위해서는 
        1. 배열의 요소들을 문자열로 합쳐서 클래스명을 한 줄로 만들어야 한다. */}
        <div className={[styles.box, styles.orange].join(' ')}>2</div>
        {/* 2. 백틱 사용한 템플릿 리터럴. 두 클래스를 함께 적용 (추천)
        */}
        <div className={`${styles.box} ${styles.yellow}`}>3</div>

    </div>
  )
}
