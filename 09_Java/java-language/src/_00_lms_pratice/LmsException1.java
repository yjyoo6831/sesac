package _00_lms_pratice;

public class LmsException1 {
    public static void main(String[] args) {
        // 실습 1
        int[] list = {1,2,3,4};
        try{
        for(int i : list){
            System.out.println(i);
        }
            System.out.println(list[5]);
        }
        catch(ArrayIndexOutOfBoundsException e){
            System.out.println("예외 발생 > " + e.getMessage());
        }
    }
}
