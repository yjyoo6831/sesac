package codingon.spring_boot_mybatis.controller;

import codingon.spring_boot_mybatis.dto.UserDTO;
import codingon.spring_boot_mybatis.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController //RESTful 웹 서비스의 컨트롤러
// - 해당 클래스의 모든 메서드 반환 값이 자동으로 JSON형식으로 변환되어 HTTP  응답 본문에 포함
@RequestMapping("/api/users")  // 기본 경로 지정
public class UserController {

    // UserService 의존성을 자동주입
    @Autowired
    private UserService userService;

    // 모든 사용자 정보를 리스트로 반환
    @GetMapping
    public List<UserDTO> listUsers(){
        return userService.getAllUsers();
    }

    // 특정 ID의 사용자 정보 반환 - 수정페이지에서 기존 값 불러올 때
    @GetMapping("/{id}")
    public UserDTO getUser(@PathVariable Long id){
        return userService.getUserById(id);
    }

    // 새 사용자를 생성하고 생성된 사용자 정보 반환
    @PostMapping
    public UserDTO createUser(@RequestBody UserDTO userDTO){
        // @RequestBody - HTTP 요청을 자바 객체로 변환
        userService.createUser(userDTO);
        return userDTO;
    }
    // 특정 ID 의 사용자 정보를 업데이트하고 업데이트된 정보를 반환
    @PutMapping("/{id}")
    public UserDTO updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        userDTO.setId(id);
        userService.updateUser(userDTO);
        return userDTO;
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }
}
