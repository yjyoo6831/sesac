package _09_dependency_injection._before;

// 게시판 목록을 관리하는 기능 제공
public class BoardService {

//    private final FileBoardPersistence persistence;
    // File 에서 Db로 바뀐다면 변수명을 다 바까줘야하므로 코드가 비효율적으로 진행된다. 
    private final DbBoardPersistence persistence;

    public BoardService(){
//        this.persistence = new FileBoardPersistence();
        this.persistence = new DbBoardPersistence();
    }
    public void save(){
        persistence.save();
    }
    public void delete(){
        persistence.delete();
    }
}
