public class array {
    public static void main(String[] args) {
        int[] nums=new int[5];
        nums[0]=1;
        nums[1]=5;
        nums[2]=10;

        // new String[] 생략가능
        String[] arr=new String[3];
        String arr1[]=new String[]{"A","B","C"};
        int[] arr2={1,2,3,4,5};

        for(int i=0;i<arr1.length;i++){
            System.out.println(arr1[i]);
        }
        for (int n:arr2){
            System.out.println(n);
        }

    }
}
