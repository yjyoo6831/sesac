package _08_collection._list;

import java.util.LinkedList;

public class LinkedListEx {
    public static void main(String[] args) {
        // LinkedList 생성
        LinkedList<String> list = new LinkedList<String>();

        // 요소 추가
        list.add("Apple");
        list.add("Banana");
        list.add("Grapes");
        list.add("Pineapple");
        System.out.println("list = " + list);

        // 첫번째, 마지막 위치에 요소 추가
        // -addFirst, addLast 메소드는 LinkedList에 특화된 메소드
        list.addFirst("kiwi");
        list.addLast("cherry");

        System.out.println("list = " + list);

        // 특정위치 요소 삽입
        list.add(2,"add");
        System.out.println("list = " + list);

        //삭제
        list.remove(4);
        list.remove("Banana");
        System.out.println("list = " + list);

        // 첫번째와 마지막 요소 가져오기
        System.out.println("첫번째 요소 " + list.getFirst());
        System.out.println("마지막 요소 " + list.getLast());

        // 첫번째 , 마지막 요소 삭제
        String first = list.removeFirst();
        String last = list.removeLast();
        System.out.println("list = " + list);
        System.out.println("삭제된 첫번째 요소 : " + first);

        // 요소 검색
        boolean containsCherry = list.contains("cherry");
        System.out.println("체리 포함 여부 : " + containsCherry);

        // 요소 위치 찾기
        int indexOfApple = list.indexOf("Apple");
        System.out.println("Apple의 인덱스 : " + indexOfApple);

        // 순회
        for(String f: list) {
            System.out.println("f = " + f);
        }
        // 크기
        System.out.println("LinkedList 사이즈 " + list.size());

        // 비우기
        list.clear();
        System.out.println("비운후 LinkedList 사이즈 " + list.size());
    }
}
