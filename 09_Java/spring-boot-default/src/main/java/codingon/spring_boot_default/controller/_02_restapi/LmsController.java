package codingon.spring_boot_default.controller._02_restapi;

import codingon.spring_boot_default.dto.LmsDTO;
import codingon.spring_boot_default.vo.UserVO;
import codingon.spring_boot_default.vo.LmsVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class LmsController {
    @GetMapping("/")
    public String getReq(){
        return "_02_restapi/lmsres";
    }
    // lms 과제-1
    @GetMapping("/introduce/{name}")
    public String introduce(@PathVariable String name, Model model) {
        System.out.println("param(name) = " + name);
        model.addAttribute("name", name);
        return "_02_restapi/lmsres";
    }

    @GetMapping("/introduce2")
    public String introduce2(@RequestParam(value="name") String name, @RequestParam(value="age") int age, Model model) {
        System.out.println("query(name) = " + name);
        System.out.println("query(age) = " + age);

        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "_02_restapi/lmsres";
    }

    @PostMapping("/post/lms")
    @ResponseBody
    public String postLms(@RequestParam String name, @RequestParam String gender, @RequestParam String date,
                          @RequestParam String interest, Model model) {

        System.out.println("이름 : " + name +
                "\n성별 : " + gender +
                "\n생년월일 : " + date + "\n관심사 : " + interest
        );
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        model.addAttribute("date", date);
        model.addAttribute("interest", interest);
        return "이름 : " + name +  "<br>" +
                "성별 : " + gender + "<br>" +
                "생년월일 : " + date + "<br>" +
                "관심사 : " + interest;
    }

    @PostMapping("/post/axios")
    @ResponseBody
    public String postAxios(@RequestBody UserVO userVO){
//        System.out.println("userVO = " + userVO);
        System.out.println("[POST] userVO.name = " + userVO.getName());
        System.out.println("[POST] userVO.gender = " + userVO.getGender());
        System.out.println("[POST] userVO.getDate = " + userVO.getDate());
        System.out.println("[POST] userVO.interest = " + userVO.getInterest());
        return "이름 : " + userVO.getName() +
                "\n성별 : " + userVO.getGender() +
                "\n생년월일 : " + userVO.getDate() +
                "\n관심사 : " + userVO.getInterest() +
                "\n회원 가입 성공!";
    }

    // 회원 관리 시스템
    // 회원가입
    @PostMapping("/join")
    @ResponseBody
    public String postJoin(@RequestBody LmsVO lmsVO){
        return lmsVO.getName() + " " + lmsVO.getPassword();
    }
    // 로그인
    @GetMapping("/login")
    @ResponseBody
    public String getLogin(){
        return "로그인 화면";
    }
    // 회원정보수정
    @PostMapping("/update")
    @ResponseBody
    public String postUpdate(LmsDTO lmsDTO){
        lmsDTO.setName(lmsDTO.getName());
        lmsDTO.setPassword(lmsDTO.getPassword());
        return "회원 정보 수정완료";
    }
    // 회원정보삭제
    @DeleteMapping("/deleted/{id}")
    public String delUser(@PathVariable int id){
        return "회원 정보 삭제";
    }




}
