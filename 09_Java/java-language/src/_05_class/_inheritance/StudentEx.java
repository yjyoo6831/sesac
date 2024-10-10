package _05_class._inheritance;

public class StudentEx {
    public static void main(String[] args) {
        Student std1 = new Student("김새싹", 20);

        // case1. 부모/자식 클래스의 필드가 public
        // System.out.println(std1.name);
        // System.out.println(std1.age);
        // System.out.println(std1.campus); //null 나오는 이유 ; campus 필드는 setter 를 이용해야만 추가되게 코드가 작성됨.

        // std1.say();
        // std1.eat("바나나나");

        // std1.setCampus("새싹 영등포");
        // System.out.println(std1.campus);

        // case2. private 필드
        System.out.println(std1.getName());
        System.out.println(std1.getAge());
        System.out.println(std1.getCampus()); //null 나오는 이유 ; campus 필드는 setter 를 이용해야만 추가되게 코드가 작성됨.

        std1.say();
        std1.eat("바나나나");

        std1.setCampus("새싹 영등포");
        System.out.println(std1.getCampus());

    }

}
