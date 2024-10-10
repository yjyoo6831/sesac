package _00_lms_pratice;

import java.util.Arrays;
import java.util.Scanner;

public class LmsArray {
    public static void main(String[] args) {
        System.out.println("5개의 정수를 입력하세요");
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[5];
        for(int i=0 ; i < arr.length ; i++){
            arr[i] = sc.nextInt();
        }
        System.out.println("arr = " + Arrays.toString(arr));
        System.out.println("평균 : " + Arrays.stream(arr).average().getAsDouble());

    }
}
