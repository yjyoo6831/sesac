package _00_lms_pratice._241002;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;

public class LmsCollection {
    public static void main(String[] args) {
        System.out.println("정수를 입력하세요. -1을 입력하면 종료됩니다.");
        Scanner sc = new Scanner(System.in);
        HashSet<Integer> uniquelist = new HashSet<>();

        while(true) {
            System.out.print("정수 입력 : ");
            int a = sc.nextInt();
            uniquelist.add(a);

            if(a == -1) break;
        }

        System.out.println("중복 제거된 정수 목록 : " + uniquelist);
    }
}
