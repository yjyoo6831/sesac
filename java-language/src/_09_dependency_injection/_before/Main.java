package _09_dependency_injection._before;

public class Main {
    public static void main(String[] args) {
        BoardService service = new BoardService();
        // Main 에서 boardService → boardService 에서 fileboardpersistence 쓰는 중
        service.save();
        service.delete();
    }
}
