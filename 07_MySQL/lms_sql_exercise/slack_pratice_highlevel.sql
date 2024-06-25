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
create table doctor(
  doctor_id  INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  specialty VARCHAR(100) NOT NULL
);
desc doctor;
desc appointment;

create table appointment(
  appointment_id INT PRIMARY KEY AUTO_INCREMENT,
  patient_id int not null,
  doctor_id int not null,
  FOREIGN KEY (patient_id) references patient(patient_id) on update cascade on delete restrict ,
  FOREIGN KEY (doctor_id) references doctor(doctor_id) on update cascade on delete restrict ,
  appointment_date DATE NOT NULL
);
create table diagnosis(
  diagnosis_code  INT PRIMARY KEY AUTO_INCREMENT,
  diagnosis_name  VARCHAR(100) NOT NULL,
  description TEXT
);
create table diagnosis_Record(
  appointment_id int not null,
  diagnosis_code int not null,
  FOREIGN KEY (appointment_id) references appointment(appointment_id) on update cascade on delete restrict ,
  FOREIGN KEY (diagnosis_code) references diagnosis(diagnosis_code) on update cascade on delete restrict ,
  PRIMARY KEY (appointment_id, diagnosis_code)
);
desc diagnosis_Record;
-- > (참고) `mission-erd.png` 이미지로 테이블 구조 확인 가능

# 데이터 삽입 조건

-- 이미지를 참고하여 동일하게 데이터를 삽입해주세요.
-- Patient 테이블에 데이터 삽입
INSERT INTO Patient (patient_id, name, birth_date) VALUES
(1, '김철수', '1990-05-15'),
(2, '박영희', '1985-11-22'),
(3, '이지원', '2003-03-08'),
(4, '최민기', '1977-09-25'),
(5, '한지영', '1992-07-01');

-- Doctor 테이블에 데이터 삽입
INSERT INTO Doctor (doctor_id, name, specialty) VALUES
(1, '김의사', '내과'),
(2, '박의사', '외과'),
(3, '이의사', '소아과'),
(4, '최의사', '정형외과'),
(5, '한의사', '피부과');

-- Diagnosis 테이블에 데이터 삽입
INSERT INTO Diagnosis (diagnosis_code, diagnosis_name, description) VALUES
(1, '감기', '코감기 증상'),
(2, '골절', '팔 골절'),
(3, '알레르기', '꽃가루 알레르기'),
(4, '피부염', '건선 증상'),
(5, '귀염증', '중이염 증상');

-- Appointment 테이블에 데이터 삽입
INSERT INTO Appointment (appointment_id, patient_id, doctor_id, appointment_date) VALUES
(1, 1, 1, '2023-06-01'),
(2, 2, 3, '2023-06-02'),
(3, 3, 2, '2023-06-03'),
(4, 4, 4, '2023-06-04'),
(5, 5, 5, '2023-06-05');

-- Diagnosis_Record 테이블에 데이터 삽입
INSERT INTO Diagnosis_Record (appointment_id, diagnosis_code) VALUES
(1, 1),
(2, 5),
(3, 2),
(4, 2),
(5, 4);
--  (참고) `insert-result-ex.png` 이미지로 데이터 삽입 예시 확인 가능
-- # 데이터 조회 조건
-- 아래 조건을 만족하는 DML을 작성하세요.
-- 1. 모든 환자의 이름과 생년월일을 조회하시오.
select name,birth_date from patient;
-- 2. 전공이 '내과'인 의사의 이름을 조회하시오.
alter table doctor change specialty speciality VARCHAR(100);
select * from doctor where speciality='내과';
-- 3. 2023년 6월 1일에 진료받은 환자의 이름과 의사 이름을 조회하시오.
select p.name,d.name
from patient p, doctor d , appointment a
where a.appointment_date = '2023-06-01' and (d.doctor_id=a.doctor_id) and (p.patient_id=a.doctor_id);

-- 4. 진단명이 '골절'인 진단내역의 환자 이름과 진료일자를 조회하시오.
select p.name as '환자 이름', a.appointment_date as '진료일자'
from diagnosis_record r, appointment a, 
	 diagnosis d, patient p
where d.diagnosis_code=r.diagnosis_code
and r.appointment_id = a.appointment_id
and a.patient_id = p.patient_id
and d.diagnosis_name='골절' ; 
-- 5. 각 의사가 진료한 환자 수를 조회하시오.
select d.doctor_id as did ,count(a.patient_id) as pid
from doctor d
join appointment a on d.doctor_id=a.doctor_id
group by d.doctor_id, a.patient_id;

-- 6. 가장 최근에 진료받은 환자의 이름과 진료일자를 조회하시오.
select  p.name name , a.appointment_date 'date'
from  appointment a , patient p
order by a.appointment_date desc limit 1 ;

