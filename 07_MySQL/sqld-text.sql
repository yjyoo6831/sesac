	create table test(
		idx int primary key auto_increment,
		id int not null
    );
    
    desc test;
    
    drop table test;
    select * from test;
    
    insert into test(idx,id) values(null,100);
    insert into test(idx,id) values(null,200);
    insert into test(idx,id) values(null,999);
    
    select id from test group by id having count(*)=2 
    order by (
    case when id=999 then 0
    else id 
    end
    );