package _09_dependency_injection._after;

public class BoardService {
    // - 의존성 주입 구현
    // 1. 생성자를 이용한 의존성 주입
//    private final IBoardPersitence persistence; // 인터페이스 타입 - file or db가 들어올지 알 수 없다.(interface 이기 때문에)
//
//    // 생성자
//    public BoardService(IBoardPersitence persistence) {
//        this.persistence = persistence;
//    }

    // 2. setter를 이용한 의존성 주입
    // setter 를 사용할 때는 final 을 쓰면 안된다 !
    private IBoardPersitence persistence;

    public void setIBoardPersistence(IBoardPersitence persistence) {
        this.persistence = persistence;
    }

    public void save(){
        persistence.save();
    }
    public void delete(){
        persistence.delete();
    }
}
