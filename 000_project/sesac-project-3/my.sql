create database kinderpia default character set utf8 default collate utf8_general_ci;

show databases;

use kinderpia;

show tables;

select * from place_category order by place_ctg_id desc;
select * from meeting_category order by meeting_ctg_id desc;
select * from place order by place_id desc;
select * from place where place_name like "%성%";
desc place;


select * from likes order by likes_id desc;

-- 장소별 리뷰 목록, 전체 좋아요 개수, 로그인 유저가 좋아요했는지 여부
SELECT 
r.review_id, r.star, r.review_content, r.created_at, r.is_deleted,
    u.user_id as Writer, -- 작성자
    u.nickname,
    u.profile_img,
    (SELECT COUNT(*) FROM likes l WHERE l.review_id = r.review_id) AS likes_count,
    u.is_blacklist,
    EXISTS (
    SELECT 1 
    FROM likes l 
    WHERE l.review_id = r.review_id 
    AND l.user_id = 6 -- 로그인 유저 
) AS is_liked_by_user
FROM 
    review r
    JOIN user u ON u.user_id = 4
WHERE 
    r.place_id = 2
    AND r.is_deleted = false;
--
SELECT 
    r.review_id,
    r.star,
    r.review_content,
    r.created_at,
    r.is_deleted,
    u.user_id,
    u.nickname,
    u.profile_img,
    (SELECT COUNT(*) FROM likes l WHERE l.review_id = r.review_id) AS likes_count,
    u.is_blacklist,
    (SELECT COUNT(*) > 0 FROM likes l 
     WHERE l.review_id = r.review_id 
     AND l.user_id = 6) AS is_liked_by_user
FROM 
    review r
    JOIN user u ON r.user_id = u.user_id
WHERE 
    r.place_id = 1
    AND r.is_deleted = false
ORDER BY 
    r.created_at DESC;
    
--
select * from review r join likes l where r.review_id = 4;
SELECT EXISTS (
    SELECT 1 
    FROM likes 
    WHERE review_id=5 
    AND user_id=6
) as is_liked_by_user;


-- 장소별 좋아요 전체 개수 출력 
SELECT 
    r.*,
    u.user_id AS user_id,
    u.nickname,
    u.profile_img,
    u.is_blacklist,
    (SELECT COUNT(*) FROM likes l WHERE l.review_id = r.review_id) AS likes_count
FROM 
    review r
    JOIN user u ON r.user_id = u.user_id
WHERE 
    r.place_id = 2
    AND r.is_deleted = false
ORDER BY 
    r.created_at DESC;

select * from user where user_id=3;
select * from user order by user_id desc;
select * from report;
select * from likes k 
join review r where k.review_id = r.review_id;

select * from review;
select * from review where is_deleted=false and place_id=1 order by review_id desc ;
select * from review where  place_id=2 order by review_id desc ;
select r.place_id, avg(r.star) from review r where place_id=2;
select r.place_id, avg(r.star) from Review r where r.place_id = 1 group by r.place_id;
select r.user_id, r.review_content, r.star, r.place_id, r.review_id, r.created_at, round(avg(star)) as "avg_star" from review r where place_id=1;
select * from user;

select * from review r 
join place p on r.place_id = p.place_id;

insert into user values(false,false,now(),now(),1,'test1','test1','010-2222-3333','abc@naver.com','1234','a.png');
insert into user values(false,false,now(),now(),2,'test2','test2','010-2222-1111','abc2@naver.com','1234','a.png');
insert into user values(false,false,now(),now(),3,'test3','test3','010-2222-1112','abc3@naver.com','1234','a.png');

insert into review values(false,5,now(),1,1,now(),1,"좋아요");
insert into review values(false,3,now(),2,2,now(),1,"좋아요");
insert into review values(false,2,now(),1,3,now(),1,"좋아요");
insert into review values(false,2,now(),1,4,now(),2,"좋아요");
insert into review values(false,5,now(),1,5,now(),4,"좋아요");
desc review;
select * from review;
desc place;

delete from place where place_id>=1;
delete from likes where likes_id>=1;
delete from review where review_id>=1;

-- 오락 및 여가 (카테고리 ID: 1)
INSERT IGNORE INTO place (place_ctg_id, place_name, location, detail_address, latitude, longitude, place_img, operating_date, is_paid, homepage_url, place_num) VALUES
(1, '롯데월드 어드벤처', '송파구', '서울특별시 송파구 올림픽로 240', 37.511287, 127.098160, NULL, '매일 09:30-22:00', TRUE, 'https://adventure.lotteworld.com', '02-1661-2000'),
(1, '코엑스 아쿠아리움', '강남구', '서울특별시 강남구 영동대로 513', 37.513153, 127.058732, NULL, '매일 10:00-20:00', TRUE, 'https://www.coexaqua.com', '02-6002-6200'),
(1, '서울어린이대공원', '광진구', '서울특별시 광진구 능동로 216', 37.548377, 127.079632, NULL, '매일 05:00-22:00', FALSE, 'http://www.childrenpark.or.kr', '02-450-9311'),
(1, '키즈앤키즈 타임스퀘어점', '영등포구', '서울특별시 영등포구 영중로 15 타임스퀘어 5층', 37.517147, 126.903335, NULL, '매일 10:30-20:00', TRUE, 'http://www.kidsandkids.com', '02-2638-2460'),
(1, '플레이타임 스퀘어원점', '영등포구', '서울특별시 영등포구 영중로 27 스퀘어원 3층', 37.517147, 126.903335, NULL, '매일 10:00-21:00', TRUE, 'http://www.playtime.co.kr', '02-2632-2454');

-- 자연 및 환경 (카테고리 ID: 2)
INSERT IGNORE INTO place (place_ctg_id, place_name, location, detail_address, latitude, longitude, place_img, operating_date, is_paid, homepage_url, place_num) VALUES
(2, '서울숲', '성동구', '서울특별시 성동구 뚝섬로 273', 37.544182, 127.037830, NULL, '매일 24시간', FALSE, 'http://seoulforest.or.kr', '02-460-2905'),
(2, '서울대공원', '과천시', '경기도 과천시 대공원광장로 102', 37.427619, 127.017274, NULL, '매일 09:00-18:00', TRUE, 'http://grandpark.seoul.go.kr', '02-500-7338'),
(2, '한강공원 여의도지구', '영등포구', '서울특별시 영등포구 여의동로 330', 37.528751, 126.934067, NULL, '매일 24시간', FALSE, 'http://hangang.seoul.go.kr', '02-3780-0561'),
(2, '북서울꿈의숲', '강북구', '서울특별시 강북구 월계로 173', 37.620363, 127.039582, NULL, '매일 05:00-22:00', FALSE, 'http://dreamforest.seoul.go.kr', '02-2289-4001'),
(2, '서울식물원', '강서구', '서울특별시 강서구 마곡동로 161', 37.569396, 126.836205, NULL, '화-일 09:30-18:00', TRUE, 'http://botanicpark.seoul.go.kr', '02-2104-9711');

-- 교육 및 문화 (카테고리 ID: 3)
INSERT IGNORE INTO place (place_ctg_id, place_name, location, detail_address, latitude, longitude, place_img, operating_date, is_paid, homepage_url, place_num) VALUES
(3, '국립중앙박물관 어린이박물관', '용산구', '서울특별시 용산구 서빙고로 137', 37.523989, 126.980357, NULL, '화-일 10:00-18:00', FALSE, 'https://www.museum.go.kr/child', '02-2077-9000'),
(3, '서울상상나라', '광진구', '서울특별시 광진구 능동로 216', 37.548897, 127.081198, NULL, '화-일 10:00-18:00', TRUE, 'http://www.seoulchildrensmuseum.org', '02-6450-9500'),
(3, '국립과천과학관', '과천시', '경기도 과천시 상하벌로 110', 37.450800, 126.970204, NULL, '화-일 09:30-17:30', TRUE, 'http://www.sciencecenter.go.kr', '02-3677-1500'),
(3, '서울역사박물관', '종로구', '서울특별시 종로구 새문안로 55', 37.570431, 126.969803, NULL, '화-일 09:00-20:00', FALSE, 'http://www.museum.seoul.kr', '02-724-0274'),
(3, '국립한글박물관', '용산구', '서울특별시 용산구 서빙고로 139', 37.523766, 126.981062, NULL, '화-일 10:00-18:00', FALSE, 'https://www.hangeul.go.kr', '02-2124-6200');

-- 체험 및 활동 (카테고리 ID: 4)
INSERT IGNORE INTO place (place_ctg_id, place_name, location, detail_address, latitude, longitude, place_img, operating_date, is_paid, homepage_url, place_num) VALUES
(4, '키자니아', '송파구', '서울특별시 송파구 올림픽로 240 롯데월드몰 3층', 37.513358, 127.102750, NULL, '매일 10:00-19:00', TRUE, 'https://www.kidzania.co.kr', '02-1544-5110'),
(4, '서울로봇인공지능과학관', '마포구', '서울특별시 마포구 월드컵북로 382', 37.583565, 126.899545, NULL, '화-일 10:00-18:00', TRUE, 'http://www.robot.or.kr', '02-2121-0700'),
(4, '롯데월드 민속박물관', '송파구', '서울특별시 송파구 올림픽로 240', 37.511287, 127.098160, NULL, '매일 09:30-21:00', TRUE, 'https://folkmuseum.lotteworld.com', '02-411-4764'),
(4, '서울시립과학관', '노원구', '서울특별시 노원구 한글비석로 168', 37.654380, 127.073425, NULL, '화-일 09:30-17:30', FALSE, 'http://science.seoul.go.kr', '02-970-4500'),
(4, '서울영어마을 풍납캠프', '송파구', '서울특별시 송파구 풍납동 45', 37.535716, 127.114384, NULL, '월-금 09:00-18:00', TRUE, 'http://www.sev.go.kr', '02-404-0157');

-- 스포츠 및 운동 (카테고리 ID: 5)
INSERT IGNORE INTO place (place_ctg_id, place_name, location, detail_address, latitude, longitude, place_img, operating_date, is_paid, homepage_url, place_num) VALUES
(5, '올림픽공원 스케이트장', '송파구', '서울특별시 송파구 올림픽로 424', 37.520509, 127.121929, NULL, '매일 10:00-20:00', TRUE, 'http://www.kspo.or.kr', '02-410-1114'),
(5, '스포츠몬스터 잠실점', '송파구', '서울특별시 송파구 올림픽로 240 롯데월드몰 5층', 37.513358, 127.102750, NULL, '매일 10:00-22:00', TRUE, 'https://www.sportsmonster.co.kr', '02-3213-4547'),
(5, '서울생활체육회 어린이체육교실', '중구', '서울특별시 중구 을지로 지하 42', 37.566374, 126.977736, NULL, '월-금 09:00-18:00', TRUE, 'http://www.seoulsports.or.kr', '02-490-2700'),
(5, '올림픽공원 수영장', '송파구', '서울특별시 송파구 올림픽로 424', 37.520509, 127.121929, NULL, '매일 06:00-22:00', TRUE, 'http://www.kspo.or.kr', '02-410-1114'),
(5, '서울시립청소년스포츠센터', '중랑구', '서울특별시 중랑구 망우로 182', 37.589561, 127.092692, NULL, '월-토 06:00-22:00', TRUE, 'http://www.youth.seoul.kr', '02-490-0100');

-- 기타 (카테고리 ID: 6)
INSERT IGNORE INTO place (place_ctg_id, place_name, location, detail_address, latitude, longitude, place_img, operating_date, is_paid, homepage_url, place_num) VALUES
(6, '서울상상나라 장난감도서관', '광진구', '서울특별시 광진구 능동로 216', 37.548897, 127.081198, NULL, '화-일 10:00-17:00', TRUE, 'http://www.seoulchildrensmuseum.org', '02-6450-9500'),
(6, '서울시립어린이도서관', '종로구', '서울특별시 종로구 사직로 9길 15-8', 37.572844, 126.969419, NULL, '화-일 09:00-18:00', FALSE, 'http://childlib.sen.go.kr', '02-731-2141'),
(6, '노원어린이도서관', '노원구', '서울특별시 노원구 동일로 204길 13', 37.654380, 127.073425, NULL, '화-일 09:00-18:00', FALSE, 'http://www.nowonlib.kr', '02-933-7145'),
(6, '서울시청자미디어센터', '성북구', '서울특별시 성북구 정릉로 308', 37.608151, 127.036301, NULL, '화-일 09:00-18:00', FALSE, 'http://seoul.kcmf.or.kr', '02-6919-5000'),
(6, '꿈의숲아트센터', '강북구', '서울특별시 강북구 월계로 173', 37.620363, 127.039582, NULL, '화-일 10:00-18:00', TRUE, 'http://www.dfac.or.kr', '02-2289-5401');