package _04_exception;

import java.util.Arrays;
import java.util.Scanner;

public class MultipleCatchEx {
    public static void main(String[] args) {
        Scanner sc = null;

        try{
            sc = new Scanner(System.in);
            System.out.println("Enter the first number: ");
            String input = sc.nextLine();

            // 문자열->정수 변환
            int number = Integer.parseInt(input);

            // 숫자를 0으로 나누기 시도
            int result = 100 / number;
            System.out.println("100을 " + number +"로 나눈 결과 > " + result);

            // 배열 접근 시도
            int[] array = new int[5];
            array[number] = 10;
            System.out.println(number + "인덱스의 값을 10으로 수정했습니다." + Arrays.toString(array));

        }catch(NumberFormatException e){
            System.out.println("Invalid input"  + e.getMessage());
        }catch (ArithmeticException e){
            System.out.println("0으로 나눌 수 없습니다." + e.getMessage());
        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println("배열 인덱스가 범위를 벗어났습니다."  + e.getMessage());
        }catch(Exception e){
            // General exception handler:
            // - 일반적으로 마지막 catch 블록으로 사용되며, 더 구체적인 예외들은 해당 블록 앞에 위치해야한다.
            System.out.println("알 수 없는 예외 발생 " + e.getMessage());
        }
        finally {
            System.out.println("프로그램 종료");
            if(sc != null){
                sc.close();
            }
        }
    }
}
