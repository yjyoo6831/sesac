package _05_class._inheritance;

public class DogEx {
    public static void main(String[] args) {
        //자식 클래스의 인스턴스 생성
        // 클래스에 생성자가 없으면, 기본 생성자(매개변수가 없는 생성자)가 호출된다. 
        Dog myDog = new Dog();

        // 메소드 호출 : 오버라이딩된 메소드가 호출
        myDog.makeSound();

        //자식 클래스의 추가 메소드 호출
        myDog.fetch();
    }
}
