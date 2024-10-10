package _00_lms_pratice._interface_240930;

interface Flyable {
    void fly();
}

public class Airplane extends Vehicle implements Flyable {
    @Override
    public void move(){
        System.out.println("하늘을 나는중");
    }

    @Override
    public void fly(){
        System.out.println("10,000 피트 비행중");
    }


}
