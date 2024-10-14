package codingon.spring_boot_pratice_board.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("/")
    public String redirectToBoard(){
        return "redirect:/board";
    }
    @GetMapping("/board")
    public String getBoard(){
        return "boardList";
    }
    @GetMapping("/board/new")
    public String newBoardForm() {
        return "boardForm";
    }
    @GetMapping("/board/{id}/edit")
    public String editBoardForm() {
        return "boardForm";
    }

}
