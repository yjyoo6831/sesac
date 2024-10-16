package codingon.spring_boot_practice_board_jpa.repository;

import codingon.spring_boot_practice_board_jpa.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer> {

}
