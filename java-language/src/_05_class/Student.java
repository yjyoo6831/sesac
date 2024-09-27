package _05_class;

// 클래스
// - 객체지향 프로그래밍의 기초
// - "클래스"를 통해 "인스턴스"를 생성

// (공개) 클래스 선언
public class Student {

    // 필드
    public String name;
    public int grade;

    // 생성자
    // - 객체가 생성될 때 자동으로 호출되는 특별한 종류의 메서드
    public Student(String name, int grade) {
        // this 란? "자기자신"을 의미
        // this.name, this.grade: 현재 인스턴스의 name, grade 필드
        // 멤버 변수와 생성자의 매개변수 이름이 동일하다면 this 를 이용해 구분
        this.name = name; // 매개변수의 name 을 현재 객체의 name 필드에 할당
        this.grade = grade; // 매개변수의 grade 를 현재 객체의 grade 필드에 할당
    }

    // this 를 안쓰는 생성자
    // : 명확한 구분을 위해서 this 를 사용하는 것이 바람직
//    public Student(String n, int g) {
//        name = n;
//        grade = g;
//    }





}