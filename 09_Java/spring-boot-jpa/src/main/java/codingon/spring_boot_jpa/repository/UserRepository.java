package codingon.spring_boot_jpa.repository;

import codingon.spring_boot_jpa.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
// 해당 인터페이스가 Repository 컴포넌트임을 명시
public interface UserRepository extends JpaRepository<User, Long> {
    // ㄴ JpaRepository<User, Long> 을 상속받아 기본적인 CRUD 작업을 위한 메서드들을 제공 받음
    // ex. findAll(), findById(), save(), deleteById(), ... 등

    // - 제네릭 첫번째 타입: 관련 테이블
    // - 제네릭 두번째 타입: 관련 테이블 PK의 타입

    // case1. repository 메서드 사용
    // 1. 사용자 이름으로 n 명 조회
    List<User> findByUsername(String username); //  select * from user where username  = ?
    // 2. 검색어 보냈을 때 사용자 이름/ 이메일에 특정 문자열이 포함된 모든 사용자 n명 찾기

    // case2. @Query 어노테이션 사용
}
