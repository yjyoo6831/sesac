package codingon.spring_boot_jpa.controller;

import codingon.spring_boot_jpa.dto.UserDTO;
import codingon.spring_boot_jpa.service.UserService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService; //의존성 주입

    @GetMapping
    public List<UserDTO> listUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public UserDTO getUser(@PathVariable Long id){
        return userService.getUserById(id);
    }

    @PostMapping
    public UserDTO createUser(@RequestBody UserDTO userDTO){
        userService.createUser(userDTO);
        return userDTO;
    }

    @PutMapping("/{id}")
    public UserDTO updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO){
        //  id 를 userDTO 의 값으로 수정하겠다.
        userService.updateUser(id, userDTO);
        return userDTO;
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }

    ///////////////////////////////////////////////////////////////////////
    // 1. 사용자 이름으로 n명 조회
    @GetMapping("/byUsername")
    public List<UserDTO> getUserByUsername(@RequestParam String username){
        return userService.getUserByUsername(username);
    }
}
