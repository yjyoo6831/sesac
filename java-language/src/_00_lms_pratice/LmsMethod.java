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
        System.out.println("a+b = " + add(a,b));
        System.out.println("a-b = " + odd(a,b));
        System.out.println("a/b = " + div(a,b));
        System.out.println("a*b = " + mul(a,b));

        // 메소드 실습 2.
//        System.out.println("반지름 길이 입력하시오 : ");
//        double r = sc.nextDouble(); // 반지름의 길이
//        System.out.println("반지름 길이 = " + r + " 원의 넓이 = " + (r*r*Math.PI));
//
//        // 직사각형, 삼각형 넓이 계산
//        System.out.println("가로, 세로 길이 입력하시오 : ");
//        int w = sc.nextInt();
//        int h = sc.nextInt();
//        System.out.println("가로 : " + w + " 세로 :" + h + " 직사각형의 넓이 = " + rec(w,h));
//        System.out.println("밑변 : " + w + " 높이 :" + h + " 삼각형의 넓이 = "+ tri(w,h));

    }
    public static double add(double a, double b){
        return a+b;
    }
    public static double odd(double a, double b){
        return a-b;
    }
    public static double mul(double a, double b){
        return a*b;
    }
    public static double div(double a,double b){
        return a/b;
    }

    public static double rec(int w,int h){
        return (double)(w*h);
    }

    public static double tri(int w,int h){
        return (double)(w*h/2);
    }
}
