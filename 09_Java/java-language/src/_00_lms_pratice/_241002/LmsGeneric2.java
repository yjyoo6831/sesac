package _00_lms_pratice._241002;

class Calculator<T extends Number>{
    private T num1;
    private T num2;
    public void Caculator(T num1, T num2) {this.num1 = num1; this.num2 = num2;}
    public double add(T num1, T num2) {
        return num1.doubleValue() + num2.doubleValue();
    }

}

public class LmsGeneric2 {
    public static void main(String[] args) {
        Calculator<Integer> res1 = new Calculator<Integer>();
        System.out.println("Integer Sum : " + res1.add(3,12));
        Calculator<Double> res2 = new Calculator<>();
        System.out.println("Double Sum : " + res2.add(2.0,3.64000001));
    }
}
