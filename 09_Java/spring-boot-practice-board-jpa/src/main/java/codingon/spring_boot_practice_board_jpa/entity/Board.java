package codingon.spring_boot_practice_board_jpa.entity;

import jakarta.persistence.*;
import jakarta.persistence.Table;
import lombok.*;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import java.time.LocalDateTime;

@Entity
@Table(name="board")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 50)
    private String title;

    @Column(nullable = false, length=100)
    private String content;

    @Column(nullable = false, length = 50)
    private String writer;

    @Column(name="registered", nullable  = false , updatable = false,
            columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime registered;

    @PrePersist
    protected  void onCreate(){
        // 엔티티가 처음 저장될 때 createdAt 필드에 현재 시각을 저장
        // 메서드 이름은 자유롭게 설정 가능 (단, 메서드 반환 타입은 void, 매개변수 x)
        registered = LocalDateTime.now();
    }
}
