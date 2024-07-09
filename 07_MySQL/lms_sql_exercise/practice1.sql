-- < 실습 >
-- 아래 조건을 만족하는 SQL 문을 작성해주세요.
/*
authors, books, orders 이름을 갖는 3개의 테이블을 생성합니다. 
authors 테이블에는 author_id(기본 키), first_name, last_name 및 email의 4개 열이 있습니다. 
책 테이블에는 book_id(기본 키), title, author_id(작가 테이블에서 author_id 열을 참조하는 외부 키), publication_date의 네 개의 열이 있습니다. 
주문 테이블에는 order_id(기본 키), book_id(책 테이블의 book_id 열을 참조하는 외부 키), customer_name 및 order_date의 네 개의 열이 있습니다.

books 테이블의 author_id 컬럼은 authors 테이블의 author_id와 관계를 맺는다. 
(즉, 작가 테이블에 존재하는 작가만이 책 테이블에 데이터가 추가될 수 있다.)

orders 테이블의 book_id 컬럼은 books 테이블의 book_id와 관계를 맺는다. 
(즉, 책 테이블에 존재하는 책만이 주문 테이블에 데이터가 추가될 수 있다.)

*3가지 테이블의 자세한 정보는 추가 이미지를 참고할 것
*/
-- <<<<<<<<<<<<< practice 1 >>>>>>>>>>>>>> -- 
use lmsdb;
create table authors(
	author_id int primary key, 
    first_name varchar(50),
    last_name varchar(50),
    email varchar(50)    
);
create table books(
	book_id int primary key, 
    title varchar(100),
    author_id int,
    publication_date date,
    foreign key(author_id) references authors(author_id) on update cascade on delete cascade -- fk 설정
);
create table orders(
	order_id int primary key, 
    book_id int,
    customer_name varchar(50),
    order_date date,
    foreign key(book_id) references books(book_id) on update cascade on delete cascade -- fk 설정
);


drop table orders;
drop table books;
desc orders;
desc books;
desc authors;
select * from authors;

-- <<<<<<<<<<<<< practice 2 >>>>>>>>>>>>>> -- 

-- < 실습 >
-- 직전 실습에서 생성한 authors, books, orders 테이블에 데이터를 추가하는 INSERT 문을 실행하고 각 번호에 맞는 SQL문을 작성해주세요.

-- Add data to the authors table
INSERT INTO authors (author_id, first_name, last_name, email)
VALUES (1, 'J.K.', 'Rowling', 'jkrowling@gmail.com'),
       (2, 'George R.R.', 'Martin', 'grmartin@yahoo.com'),
       (3, 'Stephen', 'King', 'sking@hotmail.com');
-- Add data to the books table
INSERT INTO books (book_id, title, author_id, publication_date)
VALUES (1, 'Harry Potter and the Philosopher''s Stone', 1, '1997-06-26'),
       (2, 'A Game of Thrones', 2, '1996-08-06'),
       (3, 'The Shining', 3, '1977-01-28');
-- Add data to the orders table
INSERT INTO orders (order_id, book_id, customer_name, order_date)
VALUES (1, 1, 'John Smith', '2022-02-15'),
       (2, 2, 'Jane Doe', '2022-02-16'),
       (3, 3, 'Bob Johnson', '2022-02-17');
       
-- 1. author_id가 1인 작성자의 이메일을 jkrowling@yahoo.com으로 업데이트하는 SQL 문을 작성합니다.
update authors set email = 'jkrowling@yahoo.com' where author_id=1;
-- 2. books 테이블에서 book_id 2인 책을 삭제하는 SQL 문을 작성합니다.
delete from books where book_id=2;
-- 3. 다음 세부 정보가 포함된 새 책을 삽입하는 SQL 문을 작성합니다.
-- 책 ID: 4
-- 제목: The Stand
-- 저자 ID: 3
-- 발행일자 : 1978-01-01
insert into books(book_id, title, author_id, publication_date)
values (4,'The Stand',3,'1978-01-01');
-- 4. book_id 1인 책의 출판 날짜를 1997-06-30으로 업데이트하는 SQL 문을 작성하십시오.
update books set publication_date='1997-06-30' where book_id=1;

-- 5. 2022-02-17 이전에 접수된 모든 주문을 삭제하는 SQL 문을 작성합니다.
delete  from orders where order_date<'2022-02-17';

-- 6. 다음 세부 정보와 함께 새 주문을 삽입하는 SQL 문을 작성합니다.
-- 주문 ID: 4
-- 책 ID: 1
-- 고객 이름: Sarah Johnson
-- 주문일자 : 2022-02-18
insert into orders (order_id, book_id, customer_name, order_date)
values (4,1,'Sarah Johnson','2022-02-18');
-- 7. order_id가 1인 주문의 고객 이름을 Jack Smith로 업데이트하는 SQL 문을 작성합니다.
update orders set customer_name='Jack Smith' where order_id=1;
-- 8. 다음 세부 정보와 함께 새 작성자를 삽입하는 SQL 문을 작성합니다.
-- 저자 ID: 4
-- 이름: agatha
-- 성: christie
-- 이메일: agatha.christie@example.com
insert into authors 
values(4,'agatha','christie','agatha.christie@example.com');
-- 9. author_id 2인 작성자의 성을 Martinez로 업데이트하는 SQL 문을 작성합니다.
update authors set last_name='Martinez' where author_id=2;
-- 10. author_id 3인 저자가 쓴 모든 책을 삭제하는 SQL 문을 작성합니다.
delete from authors where author_id=3;

SELECT * FROM authors;
SELECT * FROM books;
SELECT * FROM orders;
desc orders;


-- <<<<<<<<<<<<< practice 3 >>>>>>>>>>>>>> -- 
-- < 실습 > 
-- departments와 employees 테이블을 생성하고 데이터를 입력해주세요.
-- 아래 문항에 맞는 SELECT 문을 작성해주세요. 

CREATE TABLE departments (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  location VARCHAR(50)
);
DESC departments;

CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);
DESC employees;

INSERT INTO departments (id, name, location)
VALUES
  (1, 'Sales', 'New York'),
  (2, 'Marketing', 'San Francisco'),
  (3, 'Engineering', 'Seattle');

INSERT INTO employees (id, name, age, department_id)
VALUES
  (1, 'John Doe', 25, 1),
  (2, 'Jane Smith', 30, 1),
  (3, 'Bob Johnson', 40, 2),
  (4, 'Alice Lee', 35, 3),
  (5, 'Tom Wilson', 28, 3);
  
SELECT * from departments;
SELECT * from employees;

-- < 풀이 > 
-- 1. 모든 직원을 직원 테이블에 나열합니다.
select * from employees;
-- 2. 나이순으로 직원 테이블에 있는 모든 직원을 나이순(내림차순)으로 나열합니다.
select * from employees order by age desc;
-- 3. 직원 테이블에 30세 이상인 직원의 이름과 나이를 나열합니다.
select name,age from employees where age>=30;
-- 4. 영업부에서 근무하는 직원의 이름과 부서 ID를 직원 표에 나열합니다.
select e.name,d.id
from departments d , employees e
where (d.id=e.department_id) and d.name='Sales';
-- 5. 엔지니어링 부서에 근무하고 30세 미만인 직원의 이름과 나이를 직원 테이블에 나열합니다.
select e.name,e.age
from departments d , employees e
where (d.id=e.department_id) and d.name='Engineering' and e.age<30;
-- 6. 직원 테이블에서 직원 수를 계산합니다.
select count(*) from employees;
-- 7. 직원 테이블에서 각 부서의 직원 수를 계산합니다.
select department_id,count(*)
from employees e
group by  e.department_id HAVING COUNT(*) >0; 

-- 8. 직원 평균 나이를 계산합니다.
select avg(age) as avg_age from employees;

-- 9. 부서별 평균 나이를 계산합니다.
select d.name,avg(e.age)
from departments d , employees e
where d.id=e.department_id
group by e.department_id;

-- 10. 부서 테이블에서 지역 컬럼의 두번째 글자가 e인 부서를 계산합니다.
select * from departments where substr(location,2,1)='e';
-- 11. 부서 테이블에서 지역 컬럼에 공백이 들어가는 부서를 계산합니다.
select * from departments where location like '% %';
-- 12. 직원 테이블에서 이름 컬럼에서 마지막 글자가 n인 사원을 계산합니다.
select * from employees where substr(name,-1,1)='n';



-----------------
-- lms nodejs-mysql 회원 가입 실습 
create table user(
	id int primary key auto_increment,
    userid varchar(20) not null,
    name varchar(20) not null,
    pw varchar(20) not null
);
drop table user;
desc user;

insert into user(userid,name,pw) values('test1','starbucks','pass1');

select * from user where id='2' and pw='pass';


