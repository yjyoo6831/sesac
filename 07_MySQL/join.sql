/* join : 여러 테이블을 합쳐서 정보 조회

*/
-- cross join 
select * from customer,orders;

-- where 절을 이용해 조인 조건 추가 -- 밑 두개는 같다  (inner join)
select count(*) from customer, orders 
    where customer.custid = orders.custid;

select * from customer inner join orders
    on customer.custid = orders.custid;

-- "고객 이름"과 고객이 주문한 "상품명", "상품 가격" 조회
select c.custid, o.prodname, o.price from customer c , orders o where c.custid = o.custid;

-- 고객 이름별로 //주문한 제품 총 구매액을 고객 별로 오름차순 정렬
select  c.custname, sum(price* amount) as 'total_price'
from customer c ,orders o
where c.custid = o.custid
group by custname 
order by total_price ;

-- natural join (중복컬럼은 한개만 나옴)
select * from customer natural join orders;