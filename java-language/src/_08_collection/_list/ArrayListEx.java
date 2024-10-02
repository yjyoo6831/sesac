package _08_collection._list;

import java.util.ArrayList;
import java.util.List;

public class ArrayListEx {
    public static void main(String[] args) {
        // ArrayList 컬렉션 생성
        List<Book> list = new ArrayList<Book>();

        // 객체 추가
        list.add(new Book("제목1","작가1"));
        list.add(new Book("제목2","작가2"));
        list.add(new Book("제목3","작가3"));
        list.add(new Book("제목4","작가4"));
        list.add(new Book("제목5","작가5"));
        System.out.println(list);

        //리스트 개수 얻기
        System.out.printf("총 %d권의 책이 존재합니다.\n", list.size());

        //특정 인덱스 객체 가져오기
        Book thirdBook = list.get(2);
        System.out.println("thirdBook = " + thirdBook);

        // 객체 삭제
        list.remove(2);
        list.remove(2);
        for(Book book : list){
            System.out.println("book = " + book);
        }
        System.out.println();

        // 모든 객체 삭제
        checkIfEmpty(list);
        list.clear();
        System.out.println(list);
    }
    private static void checkIfEmpty(List<?> list){
        System.out.println("list가 비어있나요 ? "+ list.isEmpty());
    }
}
