package _00_lms_pratice._abstract;

public class StudentEx {
    public static void main(String[] args) {
        Kim kim = new Kim("김그림","ABC",50,19800930);
        Yoo yoo = new Yoo("유예진","XYZ",3,20240930);

        start(kim);
        System.out.println();
        start(yoo);
    }
    public static void start(Student student){
        student.start();
        student.todo();
    }
}
