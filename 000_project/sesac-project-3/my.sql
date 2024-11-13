create database kinderpia default character set utf8 default collate utf8_general_ci;

show databases;

use kinderpia;

show tables;

select * from place_category order by place_ctg_id desc;
select * from meeting_category order by meeting_ctg_id desc;
select * from place order by place_id desc;
select * from place where place_name like "%성%";
desc place;

-- 오락 및 여가 (카테고리 ID: 1)
INSERT IGNORE INTO place (place_ctg_id, place_name, location, detail_address, latitude, longitude, place_img, operating_date, is_paid, homepage_url, place_num) VALUES
(1, '롯데월드', '서울', '서울특별시 송파구 잠실동 40', 37.5125, 127.1020, 'lotteworld.jpg', '2024-01-01', 0, 'http://www.lotteworld.com', '02-1234-5678'),
(1, '에버랜드', '용인', '경기도 용인시 처인구 포곡읍 201-1', 37.2953, 127.1826, 'everland.jpg', '2024-01-01', 0, 'http://www.everland.com', '031-2345-6789'),
(1, '서울랜드', '과천', '경기도 과천시 광명로 181', 37.4845, 126.9933, 'seoulland.jpg', '2024-01-01', 0, 'http://www.seoulland.co.kr', '02-3456-7890'),
(1, '키자니아', '서울', '서울특별시 송파구 올림픽로 240', 37.5149, 127.1071, 'kidzania.jpg', '2024-01-01', 0, 'http://www.kidzania.co.kr', '02-4567-8901'),
(1, '스타필드 고양', '고양', '경기도 고양시 일산서구 일산로 5', 37.6541, 126.7693, 'starfield.jpg', '2024-01-01', 0, 'http://www.starfield.co.kr', '031-5678-9012'),
(1, '파라다이스시티', '인천', '인천광역시 중구 영종해안남로 321', 37.4476, 126.6233, 'paradise.jpg', '2024-01-01', 0, 'http://www.paradise.co.kr', '032-6789-0123'),
(1, '부산 아쿠아리움', '부산', '부산광역시 해운대구 해운대해변로 140', 35.1587, 129.1605, 'busan_aquarium.jpg', '2024-01-01', 0, 'http://www.busanaquarium.co.kr', '051-7890-1234'),
(1, '서울 북촌 한옥마을', '서울', '서울특별시 종로구 북촌로 31', 37.5822, 126.9836, 'bukchon.jpg', '2024-01-01', 0, 'http://www.bukchon.org', '02-8901-2345'),
(1, '광주 비엔날레', '광주', '광주광역시 동구 서석로 3', 35.1554, 126.8537, 'biennale.jpg', '2024-01-01', 0, 'http://www.gwangjubiennale.org', '062-9012-3456'),
(1, '전주 한옥마을', '전주', '전라북도 전주시 완산구 기린대로 99', 35.8205, 127.1462, 'jeonju.jpg', '2024-01-01', 0, 'http://www.jeonju.go.kr', '063-0123-4567');

-- 자연 및 환경 (카테고리 ID: 2)
INSERT IGNORE INTO place (place_ctg_id, place_name, location, detail_address, latitude, longitude, place_img, operating_date, is_paid, homepage_url, place_num) VALUES
(2, '설악산', '속초', '강원도 속초시 설악산로 173', 38.2075, 128.5911, 'seoraksan.jpg', '2024-01-01', 0, 'http://www.seoraksan.go.kr', '033-1234-5678'),
(2, '한라산', '제주', '제주특별자치도 제주시 한라산로 2070', 33.3617, 126.5290, 'hallasan.jpg', '2024-01-01', 0, 'http://www.hallasan.go.kr', '064-2345-6789'),
(2, '지리산', '산청', '경상남도 산청군 신안면 지리산로 300', 35.3630, 127.7570, 'jirisan.jpg', '2024-01-01', 0, 'http://www.jirisan.go.kr', '055-3456-7890'),
(2, '경포대', '강릉', '강원도 강릉시 경포로 365', 37.7749, 128.8760, 'gyeongpodae.jpg', '2024-01-01', 0, 'http://www.gangneung.go.kr', '033-4567-8901'),
(2, '태안 해안국립공원', '태안', '충청남도 태안군 태안읍 태안로 132', 36.7611, 126.2963, 'taean.jpg', '2024-01-01', 0, 'http://www.taeannp.go.kr', '041-5678-9012'),
(2, '오대산', '평창', '강원도 평창군 대관령면 오대산로 173', 37.6187, 128.6224, 'odaesan.jpg', '2024-01-01', 0, 'http://www.odaesan.go.kr', '033-6789-0123'),
(2, '소백산', '단양', '충청북도 단양군 소백산로 421', 36.9914, 128.4627, 'sobaksan.jpg', '2024-01-01', 0, 'http://www.sobaksan.go.kr', '043-7890-1234'),
(2, '보성 차밭', '보성', '전라남도 보성군 보성읍 차밭길 25', 34.7575, 127.0868, 'boseong_tea.jpg', '2024-01-01', 0, 'http://www.boseong.go.kr', '061-8901-2345'),
(2, '고창 갯벌', '고창', '전라북도 고창군 고창읍 갯벌로 100', 35.4059, 126.6940, 'gochang_mudflat.jpg', '2024-01-01', 0, 'http://www.gocha.go.kr', '063-9012-3456'),
(2, '남이섬', '춘천', '강원도 춘천시 남이섬길 1', 37.8009, 127.7435, 'nami_island.jpg', '2024-01-01', 0, 'http://www.namisum.com', '033-0123-4567'),
(2, '순천만', '순천', '전라남도 순천시 순천만길 213', 34.9527, 127.4876, 'suncheonman.jpg', '2024-01-01', 0, 'http://www.suncheon.go.kr', '061-1234-5678'),
(2, '홍천강', '홍천', '강원도 홍천군 홍천읍 홍천강로 100', 37.5515, 127.8890, 'hongcheon_river.jpg', '2024-01-01', 0, 'http://www.hongcheon.go.kr', '033-2345-6789'),
(2, '백두대간', '태백', '강원도 태백시 백두대간로 150', 37.1464, 128.9856, 'baekdudaegan.jpg', '2024-01-01', 0, 'http://www.taebaek.go.kr', '033-3456-7890'),
(2, '전주 한옥마을', '전주', '전라북도 전주시 완산구 기린대로 99', 35.8205, 127.1462, 'jeonju_hanok.jpg', '2024-01-01', 0, 'http://www.jeonju.go.kr', '063-4567-8901'),
(2, '무주 덕유산', '무주', '전라북도 무주군 무주읍 덕유산로 123', 35.8839, 127.6785, 'deogyusan.jpg', '2024-01-01', 0, 'http://www.muju.go.kr', '063-5678-9012'),
(2, '여수 돌산공원', '여수', '전라남도 여수시 돌산읍 돌산로 100', 34.6608, 127.6711, 'dolsan_park.jpg', '2024-01-01', 0, 'http://www.yeosu.go.kr', '061-6789-0123'),
(2, '강릉 경포해수욕장', '강릉', '강원도 강릉시 경포로 365', 37.7749, 128.8760, 'gyeongpo_beach.jpg', '2024-01-01', 0, 'http://www.gangneung.go.kr', '033-7890-1234'),
(2, '지리산 국립공원', '남원', '전라북도 남원시 지리산로 100', 35.3630, 127.7570, 'jirisan_national.jpg', '2024-01-01', 0, 'http://www.jirisan.go.kr', '063-8901-2345'),
(2, '구례 수목원', '구례', '전라남도 구례군 구례읍 수목원로 100', 35.1923, 127.4640, 'gurae_arbor.jpg', '2024-01-01', 0, 'http://www.gurae.go.kr', '061-9012-3456');

-- 교육 및 문화 (카테고리 ID: 3)
INSERT IGNORE INTO place (place_ctg_id, place_name, location, detail_address, latitude, longitude, place_img, operating_date, is_paid, homepage_url, place_num) VALUES
(3, '국립중앙박물관', '서울', '서울특별시 용산구 서빙고로 137', 37.5260, 126.9809, 'national_museum.jpg', '2024-01-01', 0, 'http://www.museum.go.kr', '02-1234-5678'),
(3, '세종문화회관', '서울', '서울특별시 종로구 세종대로 175', 37.5747, 126.9769, 'sejong_culture.jpg', '2024-01-01', 0, 'http://www.sejongpac.or.kr', '02-2345-6789'),
(3, '전주 한옥마을', '전주', '전라북도 전주시 완산구 기린대로 99', 35.8205, 127.1462, 'jeonju_hanok.jpg', '2024-01-01', 0, 'http://www.jeonju.go.kr', '063-3456-7890'),
(3, '부산시립미술관', '부산', '부산광역시 해운대구 달맞이길 30', 35.1587, 129.1605, 'busan_art.jpg', '2024-01-01', 0, 'http://www.busan.go.kr', '051-4567-8901'),
(3, '서울역사박물관', '서울', '서울특별시 중구 만리재로 157', 37.5588, 126.9676, 'seoul_history.jpg', '2024-01-01', 0, 'http://www.museum.seoul.go.kr', '02-5678-9012'),
(3, '국립현대미술관', '과천', '경기도 과천시 관문로 240', 37.4304, 126.9823, 'mmca.jpg', '2024-01-01', 0, 'http://www.mmca.go.kr', '02-6789-0123'),
(3, '한국민속촌', '용인', '경기도 용인시 기흥구 민속촌로 90', 37.2859, 127.1849, 'folk_village.jpg', '2024-01-01', 0, 'http://www.koreanfolk.com', '031-7890-1234'),
(3, '인사동', '서울', '서울특별시 종로구 인사동길 62', 37.5795, 126.9882, 'insadong.jpg', '2024-01-01', 0, 'http://www.insadong.org', '02-8901-2345'),
(3, '경주 국립박물관', '경주', '경상북도 경주시 대릉원로 204', 35.8354, 129.2232, 'gyeongju_museum.jpg', '2024-01-01', 0, 'http://www.gyeongju.go.kr', '054-9012-3456'),
(3, '청주 고인쇄박물관', '청주', '충청북도 청주시 상당구 용암동 1', 36.6408, 127.4894, 'cheongju_printing.jpg', '2024-01-01', 0, 'http://www.cheongju.go.kr', '043-0123-4567');
-- 체험 및 활동 (카테고리 ID: 4)
INSERT IGNORE INTO place (place_ctg_id, place_name, location, detail_address, latitude, longitude, place_img, operating_date, is_paid, homepage_url, place_num) VALUES
(4, '가평 스카이워크', '가평', '경기도 가평군 청평면 강변로 100', 37.6111, 127.4861, 'gapyeong_skywalk.jpg', '2024-01-01', 0, 'http://www.gapyeong.go.kr', '031-1234-5678'),
(4, '제주도 올레길', '제주', '제주특별자치도 서귀포시', 33.2536, 126.5603, 'jeju_olle.jpg', '2024-01-01', 0, 'http://www.jejuolle.org', '064-2345-6789'),
(4, '양양 서핑', '양양', '강원도 양양군 강현면', 38.0341, 128.6223, 'yangyang_surf.jpg', '2024-01-01', 0, 'http://www.yangyang.go.kr', '033-3456-7890'),
(4, '파주 헤이리 예술마을', '파주', '경기도 파주시 탄현면 헤이리마을길 140', 37.7446, 126.7558, 'heyri.jpg', '2024-01-01', 0, 'http://www.heyri.net', '031-4567-8901'),
(4, '전주 비빔밥 만들기 체험', '전주', '전라북도 전주시 완산구', 35.8205, 127.1462, 'jeonju_bibimbap.jpg', '2024-01-01', 0, 'http://www.jeonju.go.kr', '063-5678-9012'),
(4, '여수 바다체험', '여수', '전라남도 여수시', 34.6608, 127.6711, 'yeosu_sea.jpg', '2024-01-01', 0, 'http://www.yeosu.go.kr', '061-6789-0123'),
(4, '남이섬 자전거 타기', '춘천', '강원도 춘천시 남이섬길 1', 37.8009, 127.7435, 'nami_bicycle.jpg', '2024-01-01', 0, 'http://www.namisum.com', '033-7890-1234'),
(4, '가족 캠프', '양평', '경기도 양평군', 37.4883, 127.4411, 'yangpyeong_camp.jpg', '2024-01-01', 0, 'http://www.yangpyeong.go.kr', 8),
(4, '무주 스키장', '무주', '전라북도 무주군 무주읍', 35.8839, 127.6785, 'muju_ski.jpg', '2024-01-01', 0, 'http://www.muju.go.kr',9);
-- 스포츠 및 운동 (카테고리 ID: 5)
INSERT IGNORE INTO place (place_ctg_id, place_name, location, detail_address, latitude, longitude, place_img, operating_date, is_paid, homepage_url, place_num) VALUES
(5, '서울 월드컵경기장', '서울', '서울특별시 마포구 월드컵로 240', 37.5533, 126.9014, 'world_cup_stadium.jpg', '2024-01-01', 0, 'http://www.swcstadium.com', '02-1234-5678'),
(5, '부산 아시아드 주경기장', '부산', '부산광역시 연제구 아시아드대로 100', 35.1796, 129.0756, 'busan_asian_stadium.jpg', '2024-01-01', 0, 'http://www.busan.go.kr', '051-2345-6789'),
(5, '인천 송도 국제도시', '인천', '인천광역시 연수구 송도동', 37.3925, 126.6500, 'songdo.jpg', '2024-01-01', 0, 'http://www.songdo.com', '032-3456-7890'),
(5, '여수 엑스포', '여수', '전라남도 여수시 엑스포로 1', 34.6608, 127.6711, 'yeosu_expo.jpg', '2024-01-01', 0, 'http://www.yeosu.go.kr', '061-4567-8901'),
(5, '강릉 스키장', '강릉', '강원도 강릉시 왕산면', 37.7766, 128.8680, 'gangneung_ski.jpg', '2024-01-01', 0, 'http://www.gangneung.go.kr', '033-5678-9012'),
(5, '제주 골프장', '제주', '제주특별자치도 제주시', 33.5112, 126.4900, 'jeju_golf.jpg', '2024-01-01', 0, 'http://www.jejugolf.com', '064-6789-0123'),
(5, '무주 리조트', '무주', '전라북도 무주군 무주읍', 35.8839, 127.6785, 'muju_resort.jpg', '2024-01-01', 0, 'http://www.muju.go.kr', '063-7890-1234'),
(5, '서울 체육관', '서울', '서울특별시 강남구', 37.5172, 127.0474, 'seoul_gym.jpg', '2024-01-01', 0, 'http://www.seoulgym.com', '02-8901-2345'),
(5, '전주 종합경기장', '전주', '전라북도 전주시 완산구', 35.8205, 127.1462, 'jeonju_stadium.jpg', '2024-01-01', 0, 'http://www.jeonju.go.kr', '063-9012-3456'),
(5, '대전 한밭수영장', '대전', '대전광역시 서구', 36.3504, 127.3850, 'dajeon_swimming.jpg', '2024-01-01', 0, 'http://www.dajeon.go.kr', '042-0123-4567');

-- 기타 (카테고리 ID: 6)
INSERT IGNORE INTO place (place_ctg_id, place_name, location, detail_address, latitude, longitude, place_img, operating_date, is_paid, homepage_url, place_num) VALUES
(6, '서울숲', '서울', '서울특별시 성동구 뚝섬로 273', 37.5445, 127.0420, 'seoul_forest.jpg', '2024-01-01', 0, 'http://www.seoul.go.kr', '02-1234-5678'),
(6, '한강공원', '서울', '서울특별시 용산구 한강대로 266', 37.5343, 126.9734, 'hangang_park.jpg', '2024-01-01', 0, 'http://www.hangang.go.kr', '02-2345-6789'),
(6, '경복궁', '서울', '서울특별시 종로구 사직로 161', 37.5796, 126.9769, 'gyeongbokgung.jpg', '2024-01-01', 0, 'http://www.royalpalace.go.kr', '02-3456-7890'),
(6, '창덕궁', '서울', '서울특별시 종로구 율곡로 99', 37.5770, 126.9910, 'changdeokgung.jpg', '2024-01-01', 0, 'http://www.changdeokgung.go.kr', '02-4567-8901'),
(6, '북촌 한옥마을', '서울', '서울특별시 종로구 북촌로 31', 37.5822, 126.9836, 'bukchon_hanok.jpg', '2024-01-01', 0, 'http://www.bukchon.org', '02-5678-9012'),
(6, '인천 차이나타운', '인천', '인천광역시 중구 차이나타운', 37.4842, 126.6142, 'incheon_chinatown.jpg', '2024-01-01', 0, 'http://www.chinatown.co.kr', '032-6789-0123'),
(6, '부산 자갈치시장', '부산', '부산광역시 중구 자갈치해안로 52', 35.0998, 129.0301, 'jagalchi_market.jpg', '2024-01-01', 0, 'http://www.jagalchi.co.kr', '051-7890-1234'),
(6, '대전 엑스포', '대전', '대전광역시 유성구', 36.3548, 127.3858, 'dajeon_expo.jpg', '2024-01-01', 0, 'http://www.daejeonexpo.com', '042-8901-2345'),
(6, '제주 돌문화공원', '제주', '제주특별자치도 제주시', 33.4894, 126.4950, 'jeju_stonepark.jpg', '2024-01-01', 0, 'http://www.jejudo.com', '064-9012-3456');






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
    
select * from review;
select place_id, count(r.place_id) from Review r where is_deleted=0 group by place_id ;
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
desc review;
insert into review values(false,5,now(),15,13,now(),4,"좋아요");
insert into review values(true,2,now(),15,14,now(),3,"좋아요");
delete from review where review_id=15;
select * from review;

-- 리뷰 있는 것만 반영 
SELECT 
    p.place_id,
    p.place_name,
    p.location,
    p.detail_address,
    p.operating_date,
    p.latitude,
    p.longitude,
    p.place_img,
    p.homepage_url,
    p.place_num,
    p.is_paid,
    pc.place_ctg_name,
    COALESCE(ROUND(AVG(r.star)), 0) as average_star
FROM 
    place p
    INNER JOIN place_category pc ON p.place_ctg_id = pc.place_ctg_id
    LEFT JOIN review r ON p.place_id = r.place_id
WHERE 
    r.is_deleted = false
GROUP BY 
    p.place_id,
    p.place_name,
    p.location,
    p.detail_address,
    p.operating_date,
    p.latitude,
    p.longitude,
    p.place_img,
    p.homepage_url,
    p.place_num,
    p.is_paid,
    pc.place_ctg_name;

select * from review where is_deleted=false and place_id=15 order by review_id desc ;
select * from review where place_id=15 order by review_id desc ;
select * from review where  place_id=2 order by review_id desc ;
select r.place_id, avg(r.star) from review r where place_id=15;
select r.place_id, avg(r.star) from Review r where r.place_id = 1 group by r.place_id;
select r.user_id, r.review_content, r.star, r.place_id, r.review_id, r.created_at, round(avg(star)) as "avg_star" from review r where place_id=15;
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
update review set review_content="볼 것이 많았어요" , star=5 where review_id=2;
desc place;

delete from place where place_id>=1;
delete from likes where likes_id>=1;
delete from review where review_id>=1;

INSERT INTO Review (place_id, user_id, star, review_content, is_deleted, created_at, updated_at) VALUES
(51, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '이 장소는 정말 좋았어요!', false,
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s'),
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s')),
(52, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '아주 만족스러운 경험이었습니다.', false,
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s'),
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s')),
(53, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '서비스가 훌륭했습니다.', false,
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s'),
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s')),
(54, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '재방문 의사 있습니다!', false,
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s'),
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s')),
(55, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '친구들에게 추천하고 싶어요.', false,
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s'),
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s')),
(56, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '전반적으로 만족스러웠습니다.', false,
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s'),
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s')),
(57, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '정말 기분 좋았습니다.', false,
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s'),
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s')),
(58, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '재방문할 의향이 있습니다.', false,
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s'),
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s')),
(59, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '정말 멋진 경험이었어요.', false,
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s'),
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s')),
(60, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '다시 오고 싶습니다!', false,
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s'),
    DATE_FORMAT(DATE_ADD('2023-10-01', INTERVAL FLOOR(RAND() * 31) DAY), '%Y-%m-%d %H:%i:%s')),
(61, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '최고의 장소였습니다!', false,
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s'),
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s')),
(62, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '정말 감동적이었어요.', false, 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s'), 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s')),
(63, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '이곳은 꼭 와봐야 합니다!', false, 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s'), 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s')),
(64, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '아름다운 경치였습니다.', false, 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s'), 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s')),
(65, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '정말 편안한 곳이었습니다.', false, 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s'), 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s')),
(66, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '서비스가 매우 좋았습니다.', false, 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s'), 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s')),
(67, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '가족과 함께 좋은 시간을 보냈습니다.', false, 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s'), 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s')),
(68, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '정말 추천하는 곳입니다.', false, 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s'), 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s')),
(69, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '다시 방문하고 싶어요!', false, 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s'), 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s')),
(70, FLOOR(1 + RAND() * 50), FLOOR(1 + RAND() * 5), '기대 이상이었습니다.', false, 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s'), 
    DATE_FORMAT(DATE_ADD('2023-11-01', INTERVAL FLOOR(RAND() * 30) DAY), '%Y-%m-%d %H:%i:%s'));