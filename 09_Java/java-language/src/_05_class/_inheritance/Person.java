package _05_class._inheritance;
// 슈퍼(부모) 클래스
public class Person {
    // case1. 필드가 public
    // public String name;
    // public int age;

    // // 1-1. 기본 생성자
    // // public Person(){
    // //     System.out.println("부모 클래스 Person() 생성자 호출");
    // // }

    // // 1-2. "매개 변수를 갖는" 생성자 
    // public Person(String name, int age){
    //     this.name = name;
    //     this.age = age;
    //     System.out.println("부모 클래스 Person(String name, int age) 생성자 호출");
    // }

    // // 메서드
    // public void say() {System.out.println("안녕");}

    // public void eat(String food) { System.out.println(food+ " 을(를) 먹고 있다.");}

    // case2. private 필드 
    private String name;
    private int age;

    // getter & setter
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return int return the age
     */
    public int getAge() {
        return age;
    }

    /**
     * @param age the age to set
     */
    public void setAge(int age) {
        this.age = age;
    }
    

    // 메서드
    public void say() {System.out.println("안녕");}

    public void eat(String food) { System.out.println(food+ " 을(를) 먹고 있다.");}

    



}
