package codingon.spring_boot_default.controller._01_thymeleaf.dto_vo;

import codingon.spring_boot_default.controller._01_thymeleaf.dto_vo.dto.UserDTO;

public class UserExample {
    public static void main(String[] args) {
        //UserDTO 객체 생성 (기본 생성자 사용)
        UserDTO u1=new UserDTO();

        u1.setId(1L);
        u1.setUsername("John");
        u1.setEmail("john@gmail.com");
        u1.setAge(20);
        System.out.println("u1 = " + u1);
        
        // UserDTO 객체 생성(모든 필드를 갖는 생성자 사용)
        UserDTO u2=new UserDTO(2L,"Jane","Jane@gmail.com",30);
        System.out.println("u2 = " + u2);
        
        // getter를 이용해 특정 정보 접근
        System.out.println(u2.getUsername());
        System.out.println(u2.getEmail());
        
        //setter 를 이용해 정보 수정
        u2.setAge(45);
        System.out.println("u2 = " + u2);
    }
}
