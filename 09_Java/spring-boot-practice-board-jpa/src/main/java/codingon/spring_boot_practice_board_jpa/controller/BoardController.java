package codingon.spring_boot_practice_board_jpa.controller;

import codingon.spring_boot_practice_board_jpa.dto.BoardDTO;
import codingon.spring_boot_practice_board_jpa.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/board")
public class BoardController {

    @Autowired
    private BoardService boardService;

    @GetMapping
    public List<BoardDTO> getAllBoards() {
        return boardService.getAllBoard();
    }

    @PostMapping
    public BoardDTO createBoard(@RequestBody BoardDTO boardDTO) {
        boardService.createBoard(boardDTO);
        return boardDTO;
    }

    @GetMapping("/{id}")
    public BoardDTO getBoardById(@PathVariable int id) {
        return boardService.getBoardById(id);
    }

    @PutMapping("/{id}")
    public BoardDTO updateUser(@PathVariable int id, @RequestBody BoardDTO boardDTO) {

        boardService.updateBoard(id, boardDTO);
        return boardDTO;
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id){
        boardService.deleteBoard(id);
    }
}
