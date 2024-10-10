package _00_lms_pratice._241002;

import java.util.*;

public class LmsCollection2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Map<String, Integer> map = new HashMap<>();
        Set<Map.Entry<String, Integer>> entrySet = map.entrySet();
        System.out.println("이름과 나이를 입력하세요. '종료'를 입력하면 종료됩니다.");
        while(true) {
            System.out.print("이름 입력: ");
            String s = sc.nextLine();
            if(s.equals("종료")) break;
            System.out.print("나이 입력: ");
            Integer i = Integer.parseInt(sc.nextLine());
            map.put(s,i);

        }

        System.out.println("== 입력받은 이름과 나이 목록 ==");
        System.out.println("map = " +map);
        Iterator<Map.Entry<String, Integer>> entryIterator = entrySet.iterator();
        while(entryIterator.hasNext()){
            Map.Entry<String, Integer> entry = entryIterator.next();
            String k = entry.getKey();
            Integer v = entry.getValue();
            System.out.printf("이름 : %s, 나이: %d\n",k,v);
        }

    }
}
