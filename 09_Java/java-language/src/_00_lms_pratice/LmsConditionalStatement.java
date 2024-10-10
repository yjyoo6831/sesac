package _00_lms_pratice;

import java.util.Arrays;
import java.util.Scanner;

public class LmsConditionalStatement {
    public static void main(String[] args) {
        // 실습 1.
        System.out.print("나이를 입력하세요 > ");
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();
        String res = "";
        if(age>=20){ res="성인"; }
        else if(age>=17){ res="고등학생"; }
        else if(age>=14){ res="중학생"; }
        else if(age>=8){ res="초등학생"; }
        else if(age>=1) { res="유아"; }
        else { res="1부터 입력하세요"; }
        System.out.println("age :" + age  + " => " + res);

        //실습 2.
        System.out.print("이름을 입력하세요 > ");
        String name = sc.next();

        String res1 = name.equals("홍길동") ? "남자" : name.equals("성춘향") ? "여자" : "모르겠어요" ;
        System.out.println("name :" + name + " => " + res1);
        // 실습 3.
        int[] numbers = new int[3];
        System.out.println("숫자 3개를 입력하시오");
        for(int i = 0 ; i < numbers.length; i ++){
            numbers[i] = sc.nextInt();
        }
        int total=0;
        for(int i: numbers){ total+=i; }

        System.out.println(Arrays.toString(numbers));
        System.out.println("max : " + Arrays.stream(numbers).max().getAsInt());
        System.out.println("min : " + Arrays.stream(numbers).min().getAsInt());
        System.out.println("total : " + total);
        System.out.println("avg : " + Arrays.stream(numbers).average().getAsDouble());
        sc.close();

    }

}
