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

-- 새싹 수업 
-- 데이터 베이스 : 데이터의 집합 
-- DBMS : Database Management System = 데이터 베이스를 운영/관리 하는 프로그램 ex)MySQL 
-- SQL  : 데이터베이스를 구축, 관리하고 활용하기 위해 사용하는 언어 
-- 참고 ) 스키마 == 데이터 베이스

show databases;