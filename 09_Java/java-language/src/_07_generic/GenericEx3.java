package _07_generic;

// 사람 객체간 상속 관계
// person - Teacher
// ㄴ Student
//    ㄴ WebStduent
//    ㄴ MobileStudent

class Person{ }

class Teacher extends Person{ }
class Student{  }
class WebStudent extends Student{}
class MobileStudent extends Student{}

// 등록
// - 특정 종류(T) Applicant를 나타내는 클래스
class Applicant<T>{
    public T kind;
    public Applicant(T kind){this.kind = kind;}
}

// 과정
class Course{
    // 모든 사람이면 등록 가능 - 누구나 올수있다.
    public static void registerA(Applicant<?> applicant) {
        System.out.println(applicant.kind.getClass().getSimpleName() + "이(가) CourseA를 등록함.");
    }

    // Student 객체만 등록 가능 extends Student
    public static void registerB(Applicant<? extends Student> applicant) {
        System.out.println(applicant.kind.getClass().getSimpleName() + "이(가) CourseB를 등록함.");
    }

    // Teacher나 Student가 아닌 Person만 등록 가능 - Person이나 Teacher만 가능
    // super Teacher
    public static void registerC(Applicant<? super Teacher> applicant) {
        System.out.println(applicant.kind.getClass().getSimpleName() + "이(가) CourseC를 등록함.");
    }
    // 참고. getClass(), getSimpleName()
    // -Object 클래스에서 제공되는 메서드
    // -getClass(): 객체 클래스 정보 반환, 반환 값은 클래스 객체 (ex. class java.lang.String)
    // - getSimpleName(): Class 클래스의 메소드 클래스의 간결한 이름 반환, 패키지 정보를 제외한 클래스 이름만 가져오고 싶을 때
    // applicant.kind.getClass().getSimpleName() : 클래스의 메소드 이름을 반환

}

public class GenericEx3 {
    public static void main(String[] args) {
        // CourseA는 누구나 등록 가능하다.
        Course.registerA(new Applicant<Person>(new Person()));
        Course.registerA(new Applicant<Teacher>(new Teacher()));
        Course.registerA(new Applicant<Student>(new Student()));
        Course.registerA(new Applicant<WebStudent>(new WebStudent()));
        Course.registerA(new Applicant<MobileStudent>(new MobileStudent()));
        System.out.println();
        // CourseB는 Student(Web,Mobile)만 가능하다.
//        Course.registerB(new Applicant<Person>(new Person())); // compile error
//        Course.registerB(new Applicant<Teacher>(new Teacher())); //compile error
        Course.registerB(new Applicant<Student>(new Student()));
        Course.registerB(new Applicant<WebStudent>(new WebStudent()));
        Course.registerB(new Applicant<MobileStudent>(new MobileStudent()));

        System.out.println();
        // CourseC는 super(Teacher) Teacher거나 Student가 아닌 Person만 등록 가능
        Course.registerC(new Applicant<Person>(new Person()));
        Course.registerC(new Applicant<Teacher>(new Teacher()));
//        Course.registerC(new Applicant<Student>(new Student())); // compile error
//        Course.registerC(new Applicant<WebStudent>(new WebStudent())); // compile error
//        Course.registerC(new Applicant<MobileStudent>(new MobileStudent())); // compile error

        // 와일드 카드 주의사항
        // 1. 복잡성: 와일드카드를 과도하게 사용하면 복잡성이 증가, 협업에 알맞지 않음.
        // 2. 제한된 작업: `? extends T`같은 코드의 경우에는 새로운 요소 추가 불가


    }
}
