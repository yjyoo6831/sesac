package codingon.spring_boot_pratice_board.service;

import codingon.spring_boot_pratice_board.domain.Board;
import codingon.spring_boot_pratice_board.dto.BoardDTO;
import codingon.spring_boot_pratice_board.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardMapper boardMapper;

    public List<BoardDTO> getAllBoard(){
        List<Board> board = boardMapper.findAll(); // 서비스 -> 매퍼
        List<BoardDTO> boardDTO = new ArrayList<>();

        for(Board b : board){
            BoardDTO dto = convertToDTO(b);
            boardDTO.add(dto);
        }
        return boardDTO;
    }

    public BoardDTO getBoardById(int id) {
        Board board = boardMapper.findById(id);
        return convertToDTO(board);
    }

    public void createBoard(BoardDTO boardDTO) {
        Board board = convertToEntity(boardDTO);
        boardMapper.insert(board);
    }
    public void updateBoard(BoardDTO boardDTO) {
        Board board = convertToEntity(boardDTO);
        boardMapper.update(board);
    }
    public void deleteBoard(int id) {
        boardMapper.delete(id);
    }

    // dto to domain
    private Board convertToEntity(BoardDTO boardDTO) {
        Board board = new Board();
        board.setId(boardDTO.getId());
        board.setTitle(boardDTO.getTitle());
        board.setContent(boardDTO.getContent());
        board.setWriter(boardDTO.getWriter());
        board.setRegistered(boardDTO.getRegistered());
        return board;
    }
    // domain to dto
    private BoardDTO convertToDTO(Board board) {
        BoardDTO boardDTO = new BoardDTO();
        boardDTO.setId(board.getId());
        boardDTO.setTitle(board.getTitle());
        boardDTO.setContent(board.getContent());
        boardDTO.setWriter(board.getWriter());
        boardDTO.setRegistered(board.getRegistered());
        return boardDTO;
    }
}
