package _07_generic;

// 참고. Number 클래스
// - Java에서 모든 숫자 자료형의 부모 클래스
// - 정수형, 실수형 모두 포함
// ex. Byte, Short, Integer, Long, Float, Double

// 제네릭 제한 case1
// - Box 클래스는 제네릭 타입 T를 받지만, 제한을 두어 Number를 상속한 클래스만 허용
class Box<T extends Number>{
    private T item;
    // item 이 private 이니까 값을 조회하고 수정할 수 있도록 getter,setter만들어준다.
    public void setItem(T item){this.item = item;}
    public T getItem(){return item;}
}

interface Movable {
    void move(); // 추상 메서드 정의
}
class Car implements Movable {
    @Override
    public void move() {
        System.out.println("자동차 출발");
    }
}

class Bicycle implements Movable {
    @Override
    public void move() {
        System.out.println("자전거 출발");
    }
}

// 제네릭 제한 case2
// - Container 클래스는 제네릭 타입 T를 받지만,제한을 두어 Movable 인터페이스를 구현한 클래스만 허용
// - makeItMove 메서드는 해당 객체의 move 메서드를 호출
class Container<T extends Movable>{
    private T item; // 필드 선언
    // 생성자 정의
    public Container(T item) { this.item = item; }
    public void makeItMove() { item.move(); }
}


public class GenericEx2 {
    public static void main(String[] args) {
//        Box 클래스의 제한에 어긋난다. (Number를 상속받지 않는 타입을 사용중)
//        Box<String> strBox = new Box<>();

        Box<Double> doubleBox = new Box<>();
        doubleBox.setItem(3.141592);
        Double dou = doubleBox.getItem();
        System.out.println("doubleValue = " + dou);

        Box<Integer> integerBox = new Box<>();
        integerBox.setItem(3);
        Integer i = integerBox.getItem();
        System.out.println("integerValue = " + i);

        Box<Short> shortBox = new Box<>();
        // Java에서 정수 값은 기본적으로 int로 간주된다.
        // 100이라는 short형 정수를 인자로 넘기고 싶으면, 명시적 형변환(short) 필요
        shortBox.setItem((short)100);
        Short shortValue = shortBox.getItem();
        System.out.println("shortValue = " + shortValue);

        Container<Car> carContainer = new Container<>(new Car());
        carContainer.makeItMove();

        Container<Bicycle> bicycleContainer = new Container<>(new Bicycle());
        bicycleContainer.makeItMove();


    }
}
