package codingon.spring_boot_security.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ResponseDTO<T> {
    // 제네릭 사용이유 : DTO 작성 순간에는 어던 종류의 리스트 응답할 지 알 수 없기 때문
    private String error; // 오류 메시지 (실패)
    private List<T> data; // 응답에 포함된 데이터 (성공)
}

// HTTP Response 할 떄 사용하게 될 DTO
// 서버에서 클라이언트로 응답할 때 사용할 데이터 구조 정의

