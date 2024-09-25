package _00_lms_pratice;

import java.util.ArrayList;
import java.util.Scanner;

public class LmsArrayList {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<String>();
        Scanner sc = new Scanner(System.in);
        while(true) {
            System.out.println("문자를 입력해주세요 : ");
            String a = sc.next();
//        System.out.println("입력된 문자 : " + a);
            if (a.equals("exit")) {
                for (int i = 0; i < list.size(); i++) {
                    System.out.println(list.get(i));
                }
                break;
            }
            list.add(a);
        }
    }
}
