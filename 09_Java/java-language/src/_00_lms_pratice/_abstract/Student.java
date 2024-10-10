package _00_lms_pratice._abstract;

public abstract class Student {
    String name;
    String school;
    int age;
    int no;

    public Student(String name, String school, int age, int no) {
        this.name = name;
        this.school = school;
        this.age = age;
        this.no = no;
    }

    abstract void todo();

    void start() {
        System.out.println("=== " + name + "학생의 정보 === ");
        System.out.println(
                "학교 : " + school + "\n"
                + "나이 : " + age + "\n"
                + "학번 : " + no
        );
    }
}
