use minitodo;

create table if not exists Todo ( id varchar(255) not null primary key, userId varchar(255) not null, title varchar(255) not null, done boolean default false );

desc Todo;

show tables;
select * from todo;
drop table todo;