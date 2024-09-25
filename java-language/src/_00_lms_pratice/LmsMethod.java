package _00_lms_pratice;

import java.util.Scanner;

public class LmsMethod {
    public static void main(String[] args) {
        // 메소드 실습 1.
        System.out.println("숫자 두 개 입력하세요");
        Scanner sc = new Scanner(System.in);
        double a = sc.nextDouble();
        double b = sc.nextDouble();

        System.out.println("a = " + a + ", b = " + b);
        System.out.println("a+b = " + (a + b));
        System.out.println("a-b = " + (a - b));
        System.out.println("a/b = " + (double)(a / b));
        System.out.println("a*b = " + (a * b));

        // 메소드 실습 2.
        double r = sc.nextDouble(); // 반지름의 길이
    }
}
