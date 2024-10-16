package codingon.spring_boot_practice_board_jpa.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BoardDTO {
    private int id;
    private String title;
    private String content;
    private String writer;
    private int no;
    private LocalDateTime registered;

}
