package _00_lms_pratice;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

public class LmsException3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try{
            System.out.println("배열 크기를 입력하세요 :");
            int a = sc.nextInt();
            ArrayList<Integer> list = new ArrayList<>();
            System.out.println("크기 > " + a);
            System.out.println("요소를 입력해주세요 : ");
            for (int i = 0; i < a; i++) {
                list.add(sc.nextInt());
            }
            System.out.println("list > " + list);
            int check = 0;
            ArrayList<Integer> dup = new ArrayList<>();
            for (int i = 0; i < list.size(); i++) {
                System.out.println("숫자리스트" + list.get(i));
                for (int j = i + 1; j < list.size(); j++) {
                    if (list.get(j).equals(list.get(i))) {
                        dup.add(list.get(i));
                    }
                }
            }
            System.out.println("중복된 숫자 서브 배열 > " + dup);
        }
        catch(InputMismatchException e) {
            System.out.println("InputMismatchException 발생 >> " + e.getMessage());
        }
        finally {
            sc.close();
        }
    }
}
