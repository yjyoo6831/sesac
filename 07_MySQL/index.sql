create database haksadb;
create user 'haksa' identified by 'pass';
grant all privileges on haksadb.* to haksa@'%';

create database nodedb;
create user 'node' identified by 'pass';
grant all privileges on nodedb.* to node@'%';

create database testdb;
create user 'test' identified by 'test';
grant all privileges on testdb.* to test@'%';

select host,user from user;

use haksa;
create database haksadb;
drop database haksadb;

show databases;

flush privileges;

-- 새싹 수업 *******************
-- db 목록 보기
show databases;
-- 데이터 베이스 : 데이터의 집합 
-- DBMS : Database Management System = 데이터 베이스를 운영/관리 하는 프로그램 ex)MySQL 
-- SQL  : 데이터베이스를 구축, 관리하고 활용하기 위해 사용하는 언어 
-- 참고 ) 스키마 == 데이터 베이스
-- DDL (Data Definition Language) : db, 테이블을 "정의"하는 언어 

-- 1. 데이터베이스 생성  collate utf8mb4_unicode_ci : 문자열 정렬할때 필요해서 해줌. utf8mb4  : 이모지 추가 됨.
create database codingon default character set utf8mb4 collate utf8mb4_unicode_ci;
show databases;
-- 3. 데이터베이스 사용 선언 
use codingon;
-- 4. db 삭제 
drop database codingon;

-- [테이블] 관련 명령어 
-- <제약 조건>
-- not null : null 을 허용 X (PK 에는 안써줘도 무방하다.-PK 는 당연히 null 값이 있을수 없기 때문)
-- auto_increment : 자동 숫자 증가
-- primary key : 기본키 (중복 X, null X)
-- default [xx] : 기본 값 
-- unique : 중복 X but null 허용 // 한테이블에 여러개 설정 가능 ex) 주민번호, 

-- 1. 테이블 생성  / 테이블 삭제 
create table products(
	id int not null auto_increment primary key,
    name varchar(50) not null,
    model_number varchar(15) not null,
    series varchar(30) not null
);
drop table products;
-- 2. 테이블 목록확인/ 테이블 구조 구조 확인 
show tables;
desc products;
-- 3. 테이블 수정 : 데이터가 존재하는 테이블에 테이블 구조가 바뀌어야 하는 경우
-- 기존 데이터들은 new_column 에 null 이 할당됨. 
alter table products add new_column varchar(20);
-- 컬럼 타입 수정 /  컬럼 삭제 
alter table products modify new_column int;
alter table products drop new_column;

select * from products;

-- DDL 데이터 정의어
create table customer(
	custid varchar(10) primary key,
    custname varchar(10) not null,
    addr char(10) not null,
    phone char(11),
    birth date
);
drop table customer;
drop table orders;

create table orders(
	orderid int primary key auto_increment, -- pk
    custid char(10) not null, -- fk
    prodname char(6) not null, 
    price int not null,
    amount smallint not null,
    foreign key(custid) references customer(custid) on update cascade on delete cascade -- fk 설정
);
-- 외래키 제약조건
-- 두 테이블 사이에 관계를 맺음 -> 데이터의 무결성 (데이터가 이상하지 않다)
-- 다른 테이블의 기본키를 이 테이블의 외래키로 연결 

-- 용어 
-- 기준 테이블 : 기본키를 갖는 테이블 (customer)
-- 참조 테이블 : 외래키가 있는 테이블 (orders)
-- 외래키 연결 : foreign key 참조테이블(col) references 기준테이블(col) 
-- on update cascade : 기준 테이블의 데이터가 변경되면 참조 테이블의 데이터도 변경됨.
-- on delete cascade : 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제됨.

-- 테이블끼리 관계를 맺고 나면 테이블 삭제할 때 주의
-- customer.custid, orders.custid "관계"를 맺음
-- customer에 존재하는 회원만 orders 테이블에 데이터를 추가 
-- orders테이블이 존재하고 있는 상황에서 customer 테이블을 삭제(drop)하면?
-- orders 테이블은 어떤 고객의 생일 정보를 알고 싶어도 customer 테이블 자체가 날라갔기 때문에 알 수 없음.
-- pk-fk 연결된 테이블은 외래키가 설정된 테이블 (참조테이블)이 먼저 삭제 
-- (1) orders 테이블 삭제 -> (2) customer 테이블 삭제

-- DML(Data Manipulation Language)
-- [insert] 
insert into customer (custid, custname, addr, phone, birth)
	values ('lucky', '강해원', '미국 뉴욕', '01022223333', '2002-03-05');

insert into customer (addr, phone, birth, custid, custname)
	values ('대한민국 부산', '01098765432', '2007-04-28', 'wow', '이지은');

-- 필드명을 명시하지 않는경우 컬럼이 정의된 순서대로 값을 넣기
insert into customer
	values ('happy', '최시은', '일본 오키나와', '01033331234', '1970-10-31');

-- 여러 튜플을 동시에 추가
insert into customer values 
	('asdf', '강세희', '대한민국 부산', '01033331235', '2004-11-11'),
    ('sdfg', '윤지성', '일본 도쿄', '01033331236', '1950-02-15'),
    ('dfgh', '이재은', '미국 뉴욕', '01033331237', '2004-06-07');

insert into customer values ('kiwi', '김키위', '대한민국 서울', '01012341234', '1990-03-17');
insert into customer values ('apple', '이사과', '대한민국 포항', '01012344321', '1992-06-17');

select * from customer;

select * from orders;

desc orders;
-- pk 가 auto_increment 라면 null 을 보내도 알아서 값을 채워준다.

insert into orders values(null,  'kiwi', '프링글스', 3000,5);
insert into orders values(null,  'apple', '프링글스', 3000,1),
						(null,  'apple', '칸초', 3000,3);
                        
-- [update]
-- custid 가 happy 인 고객의 주소를 대한민국 서울로 변경 
update customer set addr='대한민국 부산' where custid='happy';

-- [delete]
-- custid가 happy 인 사람의 정보를 테이블에서 삭제 
delete from customer where custid= 'happy';
-- 고객 테이블에서 apple 이 삭제 =>주문 테이블은 어떻게 달라지나요 ? 
delete from customer where custid= 'apple'; -- on delete cascade  때문에 orders 테이블에서 apple 도 삭제된다. 

INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('orange', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);


select distinct addr from customer; -- distinct : 중복 제외 
select * from customer ;

-- [where 절] 디테일한 조회 조건 추가
-- 1. 비교
-- 강해린 고객의 생일 조회 
select birth from customer where custname = '강해린';

-- 강해린 고객을 제외한 나머지 고객의 생일 조회
select birth from customer where custname != '강해린';

-- 사전 순으로 박민지 고객보다 뒤에 위치한 고객 조회 
select * from customer where custname > '박민지';
-- 1995~2000 출생 고객
select * from customer where birth between '1995-01-01' and '2000-12-31';

select * from customer where addr in ('대한민국 서울','영국 런던');
select * from customer where addr='대한민국 서울' or addr='영국 런던';

-- 서울 or 런던 아닌 고객 
select * from customer where addr not in ('대한민국 서울','영국 런던');

-- 4. 패턴
-- 주소가 '미국 로스앤젤레스'인 고객을 검색
select * from customer where addr like '미국 로스앤젤레스';
-- 주소에 '미국'이 포함되어 있는 고객 검색 (미국에 사는 사람)
select * from customer where addr like '미국%';
-- 고객 이름 두번째 글자가 '지'인 고객 검색
select * from customer where custname like '_지%';
-- 고객 이름 세번째 글자가 '수'인 고객
select * from customer where custname like '__수';
select * from customer where custname like '%수'; -- 는 틀렸다. 김수 도 답이 될 수 있기 때문에 


-- 5. 복합 조건
-- 주소지가 대한민국이고, 2000년생 이후 출생 고객 검색
select * from customer where addr like '대한민국%'  and birth>='2000-01-01';
-- 주소지가 미국이거나 영국인 고객 검색
select * from customer where addr like '미국%' or addr like '영국%';
-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색

select * from customer where phone  not like '%_4';


-- 6. order by : 정렬
select * from customer order by custname ; -- default asc
select * from customer order by custname desc; 

-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 검색  where뒤에 orderby 를 해줘야 한다.
select * from customer where birth >= '2000-01-01' order by addr desc;

-- 7. limit : 개수 제한
-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 그리고 아이디를 기준으로 내림차순 검색하는데 최초의 4개
select * from customer where birth >= '2000-01-01' order by addr desc, custid desc limit 4;

select * from customer where birth >= '2000-01-01' limit 2;

select * from customer limit 1;

select * from customer where addr like '대한민국%' limit 2;

-- 8. 집계 함수
-- : 계산하여 어떤 값을 "리턴"하는 "함수"
-- group by 함께 많이 씀
select * from orders;

-- 주문 테이블에서 상품의 총 판매 개수 검색
select sum(amount) from orders;

-- 주문 테이블에서 총 판매 개수 검색 + 의미있는 열이름으로 변경 
select sum(amount) as 'total_amount' from orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색
select sum(amount) as 'total_amount', 
	avg(amount) as 'avg_amount',
    min(price) as 'min_price',
    max(price) as 'max_price'
		from orders;

-- 주문 테이블에서 총 주문 건수 (= 튜플 개수)
select * from orders;
select count(*) from orders;

-- 주문 테이블에서 주문한 고객 수 (중복 없이)
select count(*) from customer; -- 전체 고객 수
select count(distinct custid) from orders; -- 우리 회원 중 구매전환이 이루어진 고객 수

-- 9. group by: "~별로"
-- 고객별로 주문한 주문 건수 구하기
select custid, count(*) from orders group by custid;

-- 고객별로 주문한 상품 총 수량 구하기
select custid, sum(amount) from orders group by custid;

-- 고객별로 주문한 총 주문액 orders구하기
select custid, sum(price * amount) from orders group by custid;

-- 응용 버전. 주문총액이 가장 큰 top 3
select custid, sum(price * amount) as 'total_pay' 
	from orders group by custid order by total_pay desc limit 3;

-- 상품별로 판매 개수 구하기
select prodname, sum(amount) from orders group by prodname;

-- 10. having : group by 절 이후에 추가 조건

-- 총 주문액이 10000원 이상인 고객에 대해서 // 고객별로 주문한 상품 총 수량 구하기
select custid, sum(amount), sum(price * amount) 
	from orders group by custid having sum(price * amount) >= 10000;

-- 총 주문액이 10000원 이상인 고객에 대해서 고객별로 주문한 상품 총 수량 구하기 
-- (단, custid가 'bunny'인 고객은 제외하고 출력할 것)
select custid, sum(amount), sum(price * amount) 
	from orders 
		where custid != 'bunny'
		group by custid having sum(price * amount) >= 10000;

/*
where vs. having

having
- 그룹에 대해서 필터링 (그래서 group by 와 함께 쓰임)
- group by 보다 뒤에 위치해야 함
- 집계 함수랑 함께 사용 가능

where 
- 각각의 행을 필터링
- group by 보다 앞에 위치
- 집계함수를 쓸 수는 있으나 having 절 보다는 자유롭지 못함

*/






