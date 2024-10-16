package codingon.spring_boot_practice_board_jpa.service;

import codingon.spring_boot_practice_board_jpa.entity.Board;
import codingon.spring_boot_practice_board_jpa.entity.Board;
import codingon.spring_boot_practice_board_jpa.dto.BoardDTO;
import codingon.spring_boot_practice_board_jpa.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    public List<BoardDTO> getAllBoard(){
        List<Board> board = boardRepository.findAll(); // 서비스 -> 매퍼
        List<BoardDTO> boardDTO = new ArrayList<>();

        for(Board b : board){
            BoardDTO dto = convertToDTO(b);
            boardDTO.add(dto);
        }
        return boardDTO;
    }

    public BoardDTO getBoardById(int id) {
        Board board = boardRepository.findById(id).orElse(null);
        if(board == null){
            throw new RuntimeException("board not found");
        }
        return convertToDTO(board);
    }

    public void createBoard(BoardDTO boardDTO) {
        Board board = convertToEntity(boardDTO);
        boardRepository.save(board);
    }
    public void updateBoard(int id, BoardDTO boardDTO) {
        Board board = convertToEntityWithId(id, boardDTO);
        boardRepository.save(board);
    }
    public void deleteBoard(int id) {
        boardRepository.deleteById(id);
    }

    // dto to entity
    private Board convertToEntity(BoardDTO boardDTO) {
        return Board.builder()
                .id(boardDTO.getId())
                .title(boardDTO.getTitle())
                .content(boardDTO.getContent())
                .writer(boardDTO.getWriter())
                .registered(boardDTO.getRegistered())
                .build();
    }
    // entity to dto
    private BoardDTO convertToDTO(Board board) {
        return BoardDTO.builder()
                .no((int) (board.getId() + 100))
                .id(board.getId())
                .title(board.getTitle())
                .content(board.getContent())
                .writer(board.getWriter())
                .registered(board.getRegistered())
                .build();
    }
    private Board convertToEntityWithId(int id, BoardDTO boardDTO){
        return Board.builder()
                .id(id)
                .title(boardDTO.getTitle())
                .content(boardDTO.getContent())
                .writer(boardDTO.getWriter())
                .registered(boardDTO.getRegistered())
                .build();
    }
    
}
