package _00_lms_pratice._abstract;

public class Kim extends Student{
    public Kim(String name, String school, int age, int no ) { super(name, school, age, no);}

    @Override
    void todo(){
        System.out.println( "점심은 김가네 김밥");
    }
}
