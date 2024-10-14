package codingon.spring_boot_jpa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("/")
    public String redirectToUsers(){
        return "redirect:/users"; // /로 이동해도 /users로 리다이렉트
    }

    // GET /users 요청시 userList.html 템플릿 뷰 반환
    @GetMapping("/users")
    public String listUsers() {
        return "userList";
    }

    // GET /users/new 요청시 userForm.html 템플릿 뷰 반환
    @GetMapping("/users/new")
    public String newUserForm() {
        return "userForm";
    }

    // GET /users/{id}/new 요청시 userForm.html 템플릿 뷰 반환("기존 유저 정보 수정")
    @GetMapping("/users/{id}/edit")
    public String editUserForm() {
        return "userForm";
    }
}

