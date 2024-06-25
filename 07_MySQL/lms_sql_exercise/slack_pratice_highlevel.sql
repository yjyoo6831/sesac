show tables;
# SQL 미션
-- > 아래 조건을 만족하는 SQL문을 작성하세요.
-- ## 테이블 조건
-- 다음은 각 테이블별 조건입니다.
-- - `환자(Patient)` 테이블
create table patient(
  patient_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  birth_date DATE NOT NULL
);
desc patient;
create table docter(
  doctor_id  INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  specialty VARCHAR(100) NOT NULL
);
create table appointment(

  appointment_id INT PRIMARY KEY AUTO_INCREMENT,
  FOREIGN KEY (patient_id) references patient on update cascade on delete restrict ,
  FOREIGN KEY (docter_id) references docter on update cascade on delete restrict ,
  appointment_date DATE NOT NULL
);
create table diagnosis(
  diagnosis_code  INT PRIMARY KEY AUTO_INCREMENT,
  diagnosis_name  VARCHAR(100) NOT NULL,
  description TEXT
);
create table diagnosis_Record(
  FOREIGN KEY (appointment_id) references appointment on update cascade on delete restrict ,
  FOREIGN KEY (diagnosis_code) references diagnosis on update cascade on delete restrict ,
  PRIMARY KEY (appointment_id, diagnosis_code)

);
-- > (참고) `mission-erd.png` 이미지로 테이블 구조 확인 가능

# 데이터 삽입 조건

-- 이미지를 참고하여 동일하게 데이터를 삽입해주세요.

>--  (참고) `insert-result-ex.png` 이미지로 데이터 삽입 예시 확인 가능

-- # 데이터 조회 조건

-- 아래 조건을 만족하는 DML을 작성하세요.

-- 1. 모든 환자의 이름과 생년월일을 조회하시오.

-- 2. 전공이 '내과'인 의사의 이름을 조회하시오.

-- 3. 2023년 6월 1일에 진료받은 환자의 이름과 의사 이름을 조회하시오.

-- 4. 진단명이 '골절'인 진단내역의 환자 이름과 진료일자를 조회하시오.

-- 5. 각 의사가 진료한 환자 수를 조회하시오.

-- 6. 가장 최근에 진료받은 환자의 이름과 진료일자를 조회하시오.
