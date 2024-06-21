create table instructor (
	id int primary key,
    name varchar(7),
    dept_name varchar(7),
    salary int
);

create table teaches (
	id int primary key,
    course varchar(7),
    semester varchar(7),
    year varchar(4)
);

insert into instructor values (1, 'james', '심리', 95000);
insert into instructor values (2, 'john', '컴공', 95000);

insert into teaches values (1, '운영체제', '봄', '2022');
insert into teaches values (2, '상담심리', '가을', '2023');

select * from instructor;
select * from teaches;

-- sql 에서 기본적으로 join 키워드를 사요하거나 , 를 통해 연결하면 inner join 연산을 수행
-- 이 때 , 조건이 설정되지 않은 inner join 은 cross join 을 해버린다. 
select * from instructor join teaches;
select * from instructor,teaches;