package codingon.spring_boot_default.controller._02_restapi;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RestController {
    // ==== Template 렌더링 ====
    // GET localhost:PORT/ 요청 시 ; _02_restapi/req.html 이 브라우저에 보여줌
    // node.js의 res.render()와 유사한 역할
    @GetMapping("/")
    public String getReq() { return "_02_restapi/req"; }

    // GET 요청
    // #1. Get Method / Query string
    @GetMapping("/get/res1")
    public String getRes1(@RequestParam(value="name") String name,
                          @RequestParam(value="age") int age, Model model){
        // req ex. /get/res1?name=예진&age=2 예진이 name 으로 바인딩, 2가 age로 바인딩

        // @RequestParam 어노테이션
        // - HTTP 요청 파리마터를 메서드 매개변수에 바인딩
        // - query string 중에서 name key에 대한 value 를 String name에 매핑해준다.
        // - required=true가 기본 값 이므로 요청 URL에서 name key를 필수로 보내야 함.
        // name input은 빈 input 으로 요청을 보내도 에러 발생하지 않는 이유 ?
        // -> String 은 빈 문자열도 유효한 값으로 취급하기 때문에
        System.out.println("[GET] request query string(name) = "+ name);
        System.out.println("[GET] request query string(age) = "+ age);

        // view에 전달할 데이터를 Model 객체에 추가
        model.addAttribute("name", name); //예진
        model.addAttribute("age", age); //2 가 프론틀 넘어감 -> 프론트의 th:text로 인해 프론트에서 보여짐

        // 응답 결과를 보여줄 뷰 이름 반환
        return "_02_restapi/res";
    }

    // #2. Get Method / Query String (required=false)
    @GetMapping("/get/res2")
    public String getRes2(@RequestParam(value="name" , required=false ) String name,
                          Model model){
        // req ex. /get/res2

        System.out.println("[GET] request query string(name) = "+ name);

        // view에 전달할 데이터를 Model 객체에 추가
        model.addAttribute("name", name);

        // 응답 결과를 보여줄 뷰 이름 반환
        return "_02_restapi/res";
    }

    // #3. Get Method / Path variable
    @GetMapping("/get/res3/{param1}/{param2}")
    public String getRes3(@PathVariable String param1, @PathVariable(value = "param2") int age, Model model){

        // @PathVariable 어노테이션
        // - URL path variable을 사용할 때 필요
        // - 기본적으로 path variable은 값을 가져야 함. (즉 , 값이 없으면 404 error)

        // 참고 . URL 의 path variable과 해당 메서드의 매개변수명을 다르게 사용하고 싶다면 ?
        // ex. @PathVariable(value="param2") int age
        System.out.println("[GET] request query string(param1) = " + param1);
        System.out.println("[GET] request query string(param2) = "+ age);
        model.addAttribute("name", param1);
        model.addAttribute("age" , age);

        return "_02_restapi/res";
    }

    // #4. Get Method / Path variable(optional)
    @GetMapping({"/get/res4/{name}/{age}","/get/res4/{name}"})
    // 선택적으로 받아오는 path variable이 있다면 {} 안에 경로 여러개 설정
    public String getRes4(@PathVariable String name, @PathVariable(required = false) Integer age, Model model){
        // path variable 중에서 name(필수), age(선택) 이라면 ?
        // - required=false 사용
        // - optional 한 변수가 맨 뒤에 와야 함.

        // 참고. age변수의 타입이 int가 아닌 Integer인 이유 ?
        // - age(숫자형) 이 optional 한 값이므로 null 이 가능함.
        // - primitive type(int)은 null 값을 가질 수 없음.
        // - 따라서, reference type인 wrapper 객체를 사용해야한다.
        System.out.println("[GET] request query string(name) = "+ name); // 성춘향
        System.out.println("[GET] request query string(age) = "+ age); //null

        model.addAttribute("name", name);
        model.addAttribute("age" , age);

        return "_02_restapi/res";
    }
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
}
