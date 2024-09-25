package _03_array;

// 배열
// - 배열에 저장할 자료형 선언 -> 배열 이름, 크기 선언
// - 배열의 원소는 모두 같은 타입
// - 처음 선언한 배열 크기 변경 불가

import java.util.Arrays;

public class ArrayEx {
    public static void main(String[] args){
        // 배열 변수 선언
        // 1. 타입[] 변수;
        // 2. 타입 변수[];
        int[] arr1;
        int arr2[];

        // - 배열 변수 "참조 변수" (배열도 객체다)
        // 배열 변수는 힙 영역의 배열 주소를 지정한다. 따라서 참조할 배열이 없다면 null로 초기화 가능
        String[] temp=null;
        System.out.println("temp = " + temp);

        // - 값 목록으로 배열 변수 선언과 생성
        // : 중괄호({})는 나열된 값들을 항목으로 가지는 배열을 힙에 생성하고, "번지"를 리턴
        // 즉, 배열 변수를 "리턴된 번지"를 저장함을써 참조가 이루어진다.
        int[] intArray = {16,22,34,41,59};
        System.out.println("intArray[0] = " + intArray[0]);
        System.out.println("intArray[1] = " + intArray[1]);
        System.out.println("intArray[2] = " + intArray[2]);
        System.out.println("intArray = " + intArray ); // 참조값
        intArray[1] = 77; //인덱스 1번 원소 값을 변경
        System.out.println("intArray[1] = " + intArray[1]);

        // - "new 연산자"로 배열 선언과 생성
        // - new 연산자로 배열을 처음 생성하면 배열 항목은 기본 값으로 초기화 된다. double=0.0 int=0 long=0L float 0.0f
        double[] doubleArray = new double[3];
        System.out.println("doubleArray[0] = " + doubleArray[0]);
        System.out.println("doubleArray[1] = " + doubleArray[1]);
        System.out.println("doubleArray[2] = " + doubleArray[2]);
        doubleArray[0] = 0.2;
        doubleArray[1] = 2.4;
        doubleArray[2] = 1.8;
        System.out.println("doubleArray[0] = " + doubleArray[0]);
        System.out.println("doubleArray[1] = " + doubleArray[1]);
        System.out.println("doubleArray[2] = " + doubleArray[2]);

        ///////////
        // 배열 길이
        // - 배열변수.length;
        // - length 필드는 읽기만 가능하므로 값 변경 불가
        System.out.println("doubleArray.length = " + doubleArray.length);

        // 배열 길이는 반복문에서 자주 쓰임.
        int sum = 0;
        for(int i=0; i< intArray.length; i++){
            sum += intArray[i];
        }
        System.out.println("sum = " + sum);

        double avg = (double)sum / intArray.length;
        System.out.println("avg = " + avg);

        // 배열의 길이를 벗어난다면? (배열의 인덱스는 0부터 시작하기때문)
//        System.out.println(doubleArray[doubleArray.length]);

        //////////////
        // 배열 원소 출력
        // - toString() : 배열 내용을 문자열로 변환하여 출력
        // - 배열 주소값이 아닌 배열 내부 값을 모두 보고싶을 때
        char[] charArray={'a','b','c'};
        System.out.println("intArray = " + Arrays.toString(intArray));
        System.out.println("charArray = " + Arrays.toString(charArray));
        System.out.println("doubleArray = " + Arrays.toString(doubleArray));

        //////////////////////////////////////////////////////////////////
        // 다차원 배열
        // - 배열 안에 또 다른 배열이 존재하는 배열
        // 2x3 배열
        int[][] matrix = {{1,2,3}, {4,5,6}};
        System.out.println("matrix: ");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }

        // 3x2 배열
        int[][] matrix2 = new int[3][2];
        matrix2[0][0] = 1;
        matrix2[0][1] = 2;
        matrix2[1][0] = 3;
        matrix2[1][1] = 4;
        matrix2[2][0] = 5;
        matrix2[2][1] = 6;
        System.out.println("\nmatrix2: ");
        for (int i = 0; i < matrix2.length; i++) {
            for (int j = 0; j < matrix2[i].length; j++) {
                System.out.print(matrix2[i][j] + " ");
            }
            System.out.println();
        }

        // 3차원 배열
        int[][][] threeDimensionalArray = {{{1,2,}, {3, 4}}, {{5, 6}, {7, 8}}};
        System.out.println("\nmatrix3: ");
        for (int i = 0; i < threeDimensionalArray.length; i++) {
            for (int j = 0; j < threeDimensionalArray[i].length; j++) {
                for (int k = 0; k < threeDimensionalArray[i][j].length; k++) {
                    System.out.print(threeDimensionalArray[i][j][k] + " ");
                }
                System.out.println();
            }
            System.out.println();
        }


        /////////////////////
        // 객체를 참조하는 배열
        // - 기본 타입 배열은 각 항목에 값을 직접 저장
        // - 참조 타입(클래스, 인터페이스) 배열은 각 항목에 객체의 번지를 저장
        String[] langs = new String[3];
        langs[0] = "Java";
        langs[1] = "Java";
        langs[2] = new String("Java");
        System.out.println("langs = " + Arrays.toString(langs));
        System.out.println(langs[0] == langs[1]); // 같은 객체 참조
        System.out.println(langs[1] == langs[2]); // 다른 객체 참조 (2번은 새로운 배열의 객체)
        System.out.println(langs[0].equals(langs[2]) ); // equals 는 값이 같은지만 비교하는 것

        // 배열 복사
        // - 배열은 크기가 고정되어 있다.
        // -> 더 많은 저장공간이 필요해지면 더 큰 길이의 배열을 새로 만들어서 기존 배열을 복사해야한다.

        // ver1. 반복문으로 요소 하나씩 복사
        int[] originalArray = {1,2,3};
        int[] newArray = new int[5];
        System.out.println(Arrays.toString(originalArray)); // 기존 배열 출력

        for(int i = 0; i< originalArray.length ; i++){
            newArray[i] = originalArray[i];
        }
        System.out.println(Arrays.toString(newArray)); // 복사한 새 배열 출력

        // ver2. arraycopy() 사용
        // : System.arraycopy(Object src, int srcPos, Object dest, int destPos, int length);
        // - Ojbect src: 원본 배열
        // - int srcPos: 원본 배열 복사 시작 인덱스
        // - Object dest: 새 배열
        // - int destPos: 새 배열 붙여넣기 시작 인덱스
        // - int length: 복사 항목 수
        String[] originFruits = {"apple", "banana", "kiwi"};
        String[] newFruits = new String[5];
        // 복제 전
        System.out.println("Arrays.toString(originFruits) = " + Arrays.toString(originFruits));
        System.out.println("Arrays.toString(newFruits) = " + Arrays.toString(newFruits));
        // 복제 후
//        System.arraycopy(originFruits, 0, newFruits, 1, originFruits.length - 1);
//        System.arraycopy(originFruits, 0, newFruits, 0, originFruits.length);
        System.arraycopy(originFruits, 1, newFruits, 0, originFruits.length -1);
        System.out.println("Arrays.toString(originFruits) = " + Arrays.toString(originFruits));
        System.out.println("Arrays.toString(newFruits) = " + Arrays.toString(newFruits));

        ////////////
        // Arrays 메소드
        // copyOf(arr, copyArrLength) : 배열 전체를 복사해 복사할 길이만큼 지정하여 새로운 배열 반환
        int[] originArray = {1,2,3,4,5};
        int[] copiedArray = Arrays.copyOf(originArray, 3);
        System.out.println("Arrays.toString(originArray) = " + Arrays.toString(originArray));
        System.out.println("Arrays.toString(copiedArray) = " + Arrays.toString(copiedArray));

        // copyOfRange(arr, SIdx,eIdx):
        int[] rangeArray = Arrays.copyOfRange(originArray, 1, 4);
        System.out.println("Arrays.toString(rangeArray) = " + Arrays.toString(rangeArray));

        // fill(arr, n) : 배열의 모든 요소를 동일한 값으로 채워주는 함수
        int[] filledArray = new int[5];
        System.out.println("before Arrays.toString(filledArray) = " + Arrays.toString(filledArray));
        Arrays.fill(filledArray,7);
        System.out.println("after Arrays.toString(filledArray) = " + Arrays.toString(filledArray));

        //sort(arr)
        int[] unsortedArray = {5, 8, 3, 1, 6};
        Arrays.sort(unsortedArray);
        System.out.println("unsortedArray = " + Arrays.toString(unsortedArray));

        // equals(arr1, arr2): 두 배열의 내용이 동일한지 확인
        // 요소의 값과 순서가 모두 같아야만 true, 하나라도 다르면 false
        int[] array1 = {1,2,3};
        int[] array2 = {1,2,3};
        int[] array3 = {4,2,3};
        System.out.println(Arrays.equals(array1, array2)); // true
        System.out.println(Arrays.equals(array1, array3)); //false
        System.out.println("1==2 " + (array1 == array2)); //f
        System.out.println("1==3 " +(array1 == array3)); //f

        // 참고. 같은 메모리 주소를 가리키게 하고 싶다면 ?
        int[] arr11= array1;
        System.out.println("(arr11==array1) = " + (arr11==array1)); // t

        // deepEquals(arr1,arr2) : 단일차원/다차원 두 배열이 같은지 비교
        int[][] deepArray1 = {{1,2},{3,4}};
        int[][] deepArray2 = {{1,2},{3,4}};
        int[][] deepArray3 = {{1,2},{3,5}};
        System.out.println("deepArray1 vs 2 " + Arrays.deepEquals(deepArray1, deepArray2));
        System.out.println("deepArray1 vs 3 " + Arrays.deepEquals(deepArray1, deepArray3));

        // binarySearch(arr, val) - 배열의 특정 인덱스 요소값을 이진 검색 알고리즘을 사용하여 검색 한 후 해당 위치 반환
        // - 정렬된 상태의 배열이어야 한다!

        int[] sortedArray = {10,40,50,60,70};
        int idx = Arrays.binarySearch(sortedArray, 50);
        System.out.println("idx 50 = " + idx);
    }
}
