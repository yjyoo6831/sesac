package codingon.spring_boot_security.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data // getter, setter 가 사용가능하다.
@Table(name="Todo") // 설정할 테이블 이름
@Entity
public class TodoEntity {
    @Id // 주키
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 기본키 1씩 증가
    @Column(name = "id" , updatable = false) // 주키는 id , update : false
    private Long id;
    @Column(name = "userId" , nullable = false)
    private String userId;
    @Column(name = "title" , nullable = false)
    private String title;
    @Column(name = "done" , nullable = false)
    private boolean done;

}
