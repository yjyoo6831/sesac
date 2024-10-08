package codingon.spring_boot_default.vo;

import lombok.Getter;

import java.util.List;

@Getter
public class UserVO {
    private String name;
    private int age;
    private String gender;
    private String date;
    private List<String> interest;
}

// VO 객체 특징
// - 불변(immutable) 객체
// - setter 메서드 없음
// - 비즈니스 로직 가질 수 있음.
