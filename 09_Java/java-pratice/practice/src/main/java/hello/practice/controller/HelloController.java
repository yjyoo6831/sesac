package hello.practice.controller;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

    @GetMapping("hello")
    public String hello(Model model){
        model.addAttribute("data","hello!");
        System.out.println("hello >> ");
        return "hello";
    }

    @GetMapping("hello-mvc")
    public String helloMvc(@RequestParam(value = "name",required = true) String name, Model model){
        // RequestParam 은 query String 형태  8080/hello-mvc?name=dd
        model.addAttribute("name",name); // key, value
        System.out.println("hello-mvc >> ");
        return "hello-template"; //templates/hello-template.html 로 이동
    }

    @GetMapping("hello-string")
    @ResponseBody // body에 return 값을 넣어주겠다는 의미
    public String helloString(@RequestParam("name") String name){
        return "hello " + name;
    }

    @GetMapping("hello-api")
    @ResponseBody
    public Hello helloApi(@RequestParam("name") String name){
        Hello hello = new Hello();
        hello.setName(name);
        return hello;
    }
    @Getter
    @Setter
    static class Hello {
        private String name;

        public String getName(String name){
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
}
