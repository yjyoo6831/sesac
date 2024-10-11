package codingon.spring_boot_mybatis.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private Long id;
    private String username;
    private String email;
    // domain.User와 다르게 "no" 필드 추가
    // 실제 테이블에 존재하는 컬럼은 아니지만,
    // 서비스 로직에서 no 정보를 활용 예정이라 추가함.
    private int no;
}

// dto.UserDTO
// - 데이터 전송 객체 (dto)로 클라이언트와 서버 간에 데이터 교환에 사용
// - 클라이언트한테 노출하고 싶지 않은 민감한 정보를 user 객체에 포함시키고,
// DTO 변환 과정에서 제외할 수도 있음.

// 프론트에 보여주기 싫으면 domain 에만 정의하고 DTO에서 안쓰면 된다.
