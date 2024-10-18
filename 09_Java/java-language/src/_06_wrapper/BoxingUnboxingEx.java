package _06_wrapper;

//Wrapper 객체
// - Primitive Type 값을 갖는 객체를 생성 가능
// - `java.lang` 패키지에 포함되어 있음
// - 포장 객체는 포장하고 있는 기본 타입의 값을 변경할 수 없고, 단지 객체로 생성하는데에 목적이 있다.
// - 컬렉션에서 주로 쓰임 (컬렉션 객체는 기본 타입의 값을 저장할 수 없기 때문이다.)
public class BoxingUnboxingEx {
    public static void main(String[] args) {
        // Boxing
        // : 기본 타입 -> 포장 객체
        // 포장 클래스 변수에 값이 "대입" 될 떄 발생

        Integer obj1= 200;
        Double obj2 = 3.141592;
        Character obj3 = 'A';

        System.out.println("obj1 = " + obj1);
        System.out.println("obj2 = " + obj2);
        System.out.println("obj3 = " + obj3);

        // 자료형 Value() : 명시적 Unboxing
        // - 코드의 명확성과 특정 상황에서의 안정성을 위해 사용되는 메서드
        // - 객체 값이 null 일 때, 자동 언박싱은 NullPointerException을 발생시킬 수 있지만,
        // 자료형 Value() 메서드를 사용하는 더 명확한 처리 가능

        System.out.printf("double value %.2f %n", obj1.doubleValue());
        System.out.printf("char value %c %n" , obj3.charValue());
        System.out.println();

        //Unboxing
        // - 포장 객체에서 기본 타입의 값을 얻는 과정
        // - 기본 타입 변수에 포장 객체가 대입될 때 발생
        int value1= obj1;
        System.out.printf("int value1 = %d %n", value1);
        double value2 = obj2;
        System.out.printf("double value2 = %f %n", value2);
        char value3 = obj3;
        System.out.printf("char value3 = %c %n" ,value3);

        // 연산 시 boxing
        int result1 = obj1 + 100; // obj1 (ref type) 은 100(primitive type)과 연산되기 전에 "언박싱"됨.
        double result2  = obj2 + 1.5;
        char result3 =  (char) (obj3 + 1); //char 자료형은 숫자연산이 가능하다.


    }
}