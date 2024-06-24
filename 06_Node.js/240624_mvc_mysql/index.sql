show databases;

create table visitor(
	id int primary key auto_increment, 
    name varchar(10) not null,
    comment mediumtext
);

desc visitor;
insert into visitor values
	(null, '홍길동','내가 왔다'),
    (null, '이찬혁','으라차차');
    
select * from visitor;
    