create database kinderpia default character set utf8 default collate utf8_general_ci;
 use kinderpia;
 
 show databases;
 
 show tables;
 desc place;
 desc place_category;
 desc meeting;
 
 select * from meeting;
 select * from place_category order by place_ctg_id desc;
 select * from place;
 drop table place;
 drop table place_category;
 delete from place_category where place_ctg_id>=1;
 
 insert into place_category (place_ctg_name) values ('키즈카페'),
                                                    ('실내놀이터'),
                                                    ('미술관'),
                                                    ('박물관');