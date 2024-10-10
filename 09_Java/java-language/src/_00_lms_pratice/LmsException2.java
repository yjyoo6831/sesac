package _00_lms_pratice;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

public class LmsException2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try{
        System.out.println("배열 크기를 입력하세요 :");
        int a = sc.nextInt();
        ArrayList<Integer> list = new ArrayList<>();
//        System.out.println("list.size() " + list.size());
        System.out.println("크기 > " + a);
            System.out.println("요소를 입력해주세요 : ");
        for (int i = 0; i < a; i++) {
//            System.out.println(list.get(i));
//            list.add((i + 1) * 10);
            list.add(sc.nextInt());
        }
        System.out.println("list > " + list);
        int sum = 0;
        for (int i = 0; i < list.size(); i++) {
            sum += list.get(i);
        }
        float avg =sum/list.size();
        System.out.println("avg > " + avg);
    }
        catch(InputMismatchException e) {
            System.out.println("InputMismatchException 발생 >> " + e.getMessage());
        }
        finally {
            sc.close();
        }
    }
}
