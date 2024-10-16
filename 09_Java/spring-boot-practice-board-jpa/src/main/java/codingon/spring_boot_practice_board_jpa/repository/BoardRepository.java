package codingon.spring_boot_practice_board_jpa.mapper;

import codingon.spring_boot_pratice_board.domain.Board;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface BoardMapper {
    // 어노테이션 기반 매퍼
    @Select("select * from board order by registered desc")
    List<Board> findAll();

    @Select("select * from board where id = #{id}")
    Board findById(int id);

    @Insert("insert into board (title, content, writer) values (#{title}, #{content}, #{writer})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insert(Board board);

    @Update("update board set title=#{title}, content=#{content}, writer=#{writer} where id=#{id}")
    void update(Board board);

    @Delete("delete from board where id = #{id}")
    void delete(int id);



}
