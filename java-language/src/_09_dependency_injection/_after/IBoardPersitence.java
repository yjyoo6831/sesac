package _09_dependency_injection._after;

public interface IBoardPersitence {
    // 인터페이스는 추상 메서드를 가져야한다.
    void save();
    void delete();
}
