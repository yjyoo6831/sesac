-- place category
insert IGNORE into place_category (place_ctg_name) values ('오락 및 여가'),
                                                    ('자연 및 환경'),
                                                    ('교육 및 문화'),
                                                    ('체험 및 활동'),
                                                    ('스포츠 및 운동'),
                                                    ('기타');

insert IGNORE into meeting_category (meeting_ctg_name) values ('오락 및 여가'),
                                                    ('자연 및 환경'),
                                                    ('교육 및 문화'),
                                                    ('체험 및 활동'),
                                                    ('스포츠 및 운동'),
                                                    ('기타');
-- place
insert IGNORE into place (place_ctg_id, place_name, location, detail_address, latitude, longitude, place_img, operating_date, is_paid, homepage_url, place_num) values
(1, '서울형 키즈카페 강서구 화곡3동점','강서구','서울특별시 강서구 강서로 231 2층 (화곡동, 우장산역 해링턴 타워)',NULL,NULL,NULL,'화요일~일요일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-2698-2299'),
(1, '서울형 키즈카페 서초구 서초1동점(서리풀노리학교 서초1동점)','서초구','서울특별시 서초구 사임당로 115 헤센파크힐 L층',NULL,NULL,NULL,'월~토', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-525-9340'),
(1, '서울형 키즈카페 성북구 종암동점','성북구','서울특별시 성북구 종암로19길 60 성북함께어울림센터, 2층 (종암동)',NULL,NULL,NULL,'수~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-2241-0796'),
(1, '서울형 키즈카페 성북구 정릉2동점','성북구','서울특별시 성북구 북악산로1길 64 508커뮤니티센터, 1층 (정릉동)',NULL,NULL,NULL,'수~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-2241-0793'),
(1, '서울형 키즈카페 노원구 중평공원점','노원구','서울특별시 노원구 동일로203길 73 중평공원 내 (하계동)',NULL,NULL,NULL,'화~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-973-1955'),
(1, '서울형 키즈카페 동작구 상도4동 1호점(동작키즈카페)','동작구','서울특별시 동작구 성대로 180 상도어울마당 2층 (상도동)',NULL,NULL,NULL,'월~토요일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','070-7163-1477'),
(1, '서울형 키즈카페 성동구 성수1가1동점(성수 키즈카페)','성동구','서울특별시 성동구 뚝섬로3길 18 성수1가1동주민센터 1층 (성수동1가)',NULL,NULL,NULL,'월요일~토요일', TRUE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-461-3863'),
(1, '서울형 키즈카페 서대문구 북가좌1동점(다정다감 키즈카페)','서대문구','서울특별시 서대문구 수색로8길 48-4 사회교육관 3층 (북가좌동)',NULL,NULL,NULL,'월~토', TRUE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-304-5501'),
(1, '서울형 키즈카페 중랑구 망우본동점(중랑실내놀이터 양원)','중랑구','서울특별시 중랑구 용마산로 670 시티원스퀘어 상가 201동 지하1층 (망우동, 신내역 프라디움 더 테라스)',NULL,NULL,NULL,'화~일요일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-438-4600'),
(1, '서울형 키즈카페 송파구 잠실근린공원점(하하호호놀이터 송파구1호점)','송파구','서울특별시 송파구 백제고분로15길 9 , 1,2층 (잠실동)',NULL,NULL,NULL,'화~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','070-4151-7061'),
(1, '서울형 키즈카페 시립 뚝섬자벌레점','광진구','서울특별시 광진구 강변북로 2202 2층 꿈틀나루 (자양동)',NULL,NULL,NULL,'화~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-498-4445'),
(1, '서울형 키즈카페 서초구 방배2동점(서리풀노리학교 방배2동점)','서초구','서울특별시 서초구 방배천로24길 8 방주교회 1층 (방배동)',NULL,NULL,NULL,'월~토', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-523-9340'),
(1, '서울형 키즈카페 중구 중림동점(노리몽땅)','중구','서울특별시 중구 서소문로6길 16 본관 1층 (중림동)',NULL,NULL,NULL,'화~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-363-2628'),
(1, '서울형 키즈카페 성북구 벌집어린이공원점','성북구','서울특별시 성북구 월곡로7길 56-7 서울형 키즈카페 성북구 벌집어린이공원점 (종암동)',NULL,NULL,NULL,'화~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-2241-0790'),
(1, '서울형 키즈카페 관악구 난곡동점','관악구','서울특별시 관악구 난곡로24가길 53 2층 (신림동)',NULL,NULL,NULL,'화~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-867-2846'),
(1, '서울형 키즈카페 강동구 성내1동점(아이·맘 강동)','강동구','서울특별시 강동구 성내로6길 16 2층 (성내동)',NULL,NULL,NULL,'화~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-3425-9398'),
(1, '서울형 키즈카페 도봉구 창1동점(숲속유람선 뚜뚜)','도봉구','서울특별시 도봉구 해등로4길 38 초안산생태공원 내 위치 (창동)',NULL,NULL,NULL,'화~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-994-7456'),
(1, '서울형 키즈카페 도봉구 방학1동점(오르봉내리봉)','도봉구','서울특별시 도봉구 마들로 656 도봉구청사, 지하1층 (방학동)',NULL,NULL,NULL,'화~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','070-4190-8922'),
(1, '서울형 키즈카페 강동구 상일2동점(아이·맘 강동)','강동구','서울특별시 강동구 상일로12길 95 푸르내상가 102-303 (상일동, 푸르내)',NULL,NULL,NULL,'화~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-3425-7076'),
(1, '서울형 키즈카페 양천구 오목공원점','양천구','서울특별시 양천구 목동서로 159-4 서울형 키즈카페 양천구 오목공원점 (목동)',NULL,NULL,NULL,'화~일요일', TRUE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','010-9508-0596'),
(1, '서울형 키즈카페 서초구 양재1동점(서리풀노리학교 양재1동점)','서초구','서울특별시 서초구 양재천로 125-10 양재공영주차빌딩 2층 (양재동)',NULL,NULL,NULL,'월~토', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-575-9340'),
(1, '서울형 키즈카페 시립 목동점','양천구','서울특별시 양천구 안양천로 1131 지식산업센터 2층 (목동)',NULL,NULL,NULL,'월~토', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-2647-7507'),
(1, '서울형 키즈카페 도봉구 도봉2동점(봉봉트레킹)','도봉구','서울특별시 도봉구 마들로 668  (도봉동)',NULL,NULL,NULL,'월~토 ', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-3492-7773'),
(1, '서울형 키즈카페 서초구 문화예술공원점(서리풀노리학교 문화예술공원점)','서초구','서울특별시 서초구 바우뫼로12길 40  (양재동)',NULL,NULL,NULL,'화~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-577-9340'),
(1, '서울형 키즈카페 용산구 한강로동점(용산 도담도담 실내놀이터)','용산구','서울특별시 용산구 서빙고로 17 센트럴파크타워, 2층 (한강로3가)',NULL,NULL,NULL,'화요일~일요일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-6367-3121'),
(1, '서울형 키즈카페 영등포구 대림2동점','영등포구','서울특별시 영등포구 시흥대로 625 상가 2층 (대림동, 영등포자이르네)',NULL,NULL,NULL,'화 ~ 일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','070-7777-8982'),
(1, '서울특별시 제1호 시립 서울형 키즈카페','동작구','서울특별시 동작구 노량진로 10 서울가족플라자 지하2층 (대방동)',NULL,NULL,NULL,'화~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-824-0614'),
(1, '서울형 키즈카페 강서구 발산1동점','강서구','서울특별시 강서구 수명로2길 50  (내발산동) 2층 서울형 키즈카페',NULL,NULL,NULL,'화~토', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-2064-2732'),
(1, '서울형 키즈카페 마포구 상암동점','마포구','서울특별시 마포구 상암산로1길 71 마포구육아종합지원센터 2~3층 서울형 키즈카페 마포구 상암점 (상암동)',NULL,NULL,NULL,'화~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','070-4948-1276'),
(1, '서울형 키즈카페 동작구 대방동점(동작키즈카페)','동작구','서울특별시 동작구 여의대방로36길 11 4층 (대방동)',NULL,NULL,NULL,'화~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-823-4587'),
(1, '서울형 키즈카페 강북구 번3동점(강북구 "PLAY ON")','강북구','서울특별시 강북구 오현로 208 번동주공아파트 309동, 1층 (주민복지관 1, 어린이실내놀이터)',NULL,NULL,NULL,'월요일 ~ 토요일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-988-0271'),
(1, '서울형 키즈카페 광진구 중곡3동점(꾸미팡팡 놀이터)','광진구','서울특별시 광진구 능동로 400 보건복지행정타운 별관 3층(중곡동)',NULL,NULL,NULL,'월요일~토요일 09:30~17:30 ', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-467-1827'),
(1, '서울형 키즈카페 강동구 암사1동점(아이·맘 강동)','강동구','서울특별시 강동구 올림픽로98길 15 ,3층 (암사동)',NULL,NULL,NULL,'월~토', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-3425-9489'),
(1, '서울형 키즈카페 강동구 고덕2동점(아이·맘 강동)','강동구','서울특별시 강동구 고덕로 353 일반상가 2층 (고덕동)',NULL,NULL,NULL,'화~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-3425-9435'),
(1, '서울형 키즈카페 성동구 금호2?3가동점(금호 키즈카페)','성동구','서울특별시 성동구 무수막18길 1 금호2,3가동주민센터 4층 (금호동2가)',NULL,NULL,NULL,'월요일 ~ 토요일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-6952-6799'),
(1, '서울형 키즈카페 동작구 상도3동점(동작키즈카페)','동작구','서울특별시 동작구 상도로15가길 16 가온어린이집 3층 서울형키즈카페 (상도동)',NULL,NULL,NULL,'화~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','070-7163-1474'),
(1, '서울형 키즈카페 양천구 신정7동점(5색깔깔KIDS)','양천구','서울특별시 양천구 목동남로 106-23  (신정동)',NULL,NULL,NULL,'화~일', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-2135-5946'),
(1, '서울형 키즈카페 중랑구 면목4동점(중랑 실내놀이터)','중랑구','서울특별시 중랑구 용마산로 209 공공기여시설1층 (면목동, 쌍용 더 플래티넘 용마산)',NULL,NULL,NULL,'화요일 ~ 일요일 10:00~17:30', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-2207-1123'),
(1, '서울형 키즈카페 종로구 혜화동점(종로 혜명 아이들 상상놀이터)','종로구','서울특별시 종로구 성균관로 91 올림픽기념국민생활관 2층 (혜화동)',NULL,NULL,NULL,'화요일 ~ 일요일 (공휴일 제외)', FALSE ,'https://icare.seoul.go.kr/icare/user/kidsCafe/BD_selectKidsCafeList.do','02-742-3320');


-- report reason (신고사유)
insert ignore into report_reason (report_rs_id, report_rs_name) values
(1, '부적절한 콘텐츠'),
(2, '욕설 또는 폭력적인 언어 사용'),
(3, '허위 정보 또는 스팸'),
(4, '사기 또는 부정 행위'),
(5, '개인정보 노출'),
(6, '성적 또는 음란한 콘텐츠'),
(8, '불법 행위 또는 범죄 유도'),
(9, '기타 부적절한 행위');

-- meeting category
insert ignore into meeting_category (meeting_ctg_name) values ('오락 및 여가'),
                                                    ('자연 및 환경'),
                                                    ('교육 및 문화'),
                                                    ('체험 및 활동'),
                                                    ('스포츠 및 운동'),
                                                    ('기타');