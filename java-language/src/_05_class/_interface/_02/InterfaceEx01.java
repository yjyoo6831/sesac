package _05_class._interface._02;


// 인터페이스를 역할에 따라 분리하였다.
interface Move {
    void moveForward();
    void moveBackward();
}

interface Power {
    void powerOn();
    void powerOff();
}

// 인터페이스는 인터페이스를 상속받을 수 있으며, "다중 상속" 가능
interface Car extends Move, Power {
    void changeGear(int gear);
}

class Suv implements Car{
    @Override
    public void changeGear(int gear) { System.out.println("기어변경 " + gear); }

    @Override
    public void moveForward() { System.out.println("전진"); }

    @Override
    public void moveBackward() { System.out.println("후진"); }

    @Override
    public void powerOn() { System.out.println("시동 on"); }

    @Override
    public void powerOff() { System.out.println("시동 off"); }
}

public class InterfaceEx01 {
    public static void main(String[] args) {
    Suv suv = new Suv();
    suv.powerOn();
    suv.changeGear(3);
    suv.moveForward();
    }
}
