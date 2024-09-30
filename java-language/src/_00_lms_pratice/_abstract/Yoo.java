package _00_lms_pratice._abstract;

public class Yoo extends Student{
    public Yoo(String name, String school, int age, int no ) { super(name, school, age, no);}

    @Override
    void todo(){
        System.out.println("점심은 유가네 닭갈비");
    }
}
