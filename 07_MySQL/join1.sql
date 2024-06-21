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
-- 
select * from instructor i join teaches t on i.id = t.id;

delete from teaches where id<=2;
insert into instructor values (3, 'mark', '수학', 75000);
insert into instructor values (4, 'tom', '심리', 90000);
insert into teaches values (3, '인공지능', '봄', '2022');
insert into teaches values (4, '사회심리', '가을', '2023');
insert into teaches values (5, '네트워크', '봄', '2022');
insert into teaches values (6, '알고리즘', '가을', '2023');

select * from teaches;

-- left outer join 
select * from instructor i left outer join teaches t on i.id = t.id;

-- right outer join 
select * from instructor i right outer join teaches t on i.id = t.id;

-- full outer join  ( mysql 에서는 full outer join 을 지원 X) 대신 union 을 사용한다.
select * from instructor i left outer join teaches t on i.id = t.id
union
select * from instructor i right outer join teaches t on i.id = t.id;