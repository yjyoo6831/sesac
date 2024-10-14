package codingon.spring_boot_pratice_board.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardDTO {
    private int id;
    private String title;
    private String content;
    private String writer;
    private String registered;
    private int no;
}
