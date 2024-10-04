package codingon.spring_boot_default.controller._01_thymeleaf;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.*;

//@Controller
// - Spring MVC에 Controller 클래스로 인식되어 Srping MVC가 제공하는 다양한 어노테이션 사용 가능
@Controller
public class HelloController {
    // 클라이언트 요청에 대한 처리를 각 메서드에서 작성

    //@GetMapping 어노테이션
    // - GET 요청에 대한 URL을 매핑
    // GET localhost:PORT/hi
    // /hi링크를 들어가게 되면 @Controller가 @중에 선택함. -> GetMapping -> getHi 로 들어오게 됨.
    // -> model의 msg:Hi~ (Attribute) 값을 넣은 다음 _01_thymeleaf/hi 로 들어가게 된다.
    @GetMapping("/hi")
    public String getHi(Model model){
        // Model model
        // - Spring MVC가 제공하는 타입(View에 값을 전달하는 상자 역할, MVC의 Model이 아니다)
        // - View에서 참조할 수 있는 객체 저장
        // - Controller 클래스의 메서드가 파라미터로 받을 수 있는 객체

        // #1. Thymeleaf 템플릿 소개
        // View에 값을 전달하기 위해 model 상자에 데이터(속성-값) 추가
//        model.addAttribute("msg", "Hi~");

        // #2. Thymeleaf 표현식과 문법
        model.addAttribute("hello","Spring World!");
        model.addAttribute("uText","<strong>Spring World!</strong>");
        model.addAttribute("value", "이름 입력해 주세요");
        model.addAttribute("withValue", "hello");
        model.addAttribute("link","hi");
        model.addAttribute("imgSrc","duck.png");
        model.addAttribute("userRole","admin");
        model.addAttribute("isAdmin",false);
        Hello hello = new Hello(100); // hello 객체에 인스턴스 생성
        model.addAttribute("classHello",hello);

        List<String> names = Arrays.asList("kim","lee","hong","park");
        model.addAttribute("names",names);




        // 템플릿 파일명 반환
        // src/resource/templates/_01_thymeleaf/hi.html 을 반환
        return "_01_thymeleaf/hi";
    }
    @GetMapping("/project1")
    public String getAssign1(Model model){
        model.addAttribute("age",20);
        return "_01_thymeleaf/project1";
    }

    @GetMapping("/project2")
    public String getAssign2(Model model{
        List<Person> people = new ArrayList<>();
        people.add(new Person("kim",10));
        people.add(new Person("lee",20));
        people.add(new Person("hong",30));
        people.add(new Person("park",40));
        people.add(new Person("shin",50));
        return "_01_thymeleaf/project2";
    }

    class Person{
        String name;
        int age;
        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }
        public String getName() {return name;}
        public int getAge() {return age;}
    }

    class Hello{
        private int age;
        public Hello(int age){ this.age = age;}
        public int getAge(){ return age; }
    }
}
