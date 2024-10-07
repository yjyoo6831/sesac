package codingon.spring_boot_default.controller._02_restapi;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

public class LmsController {
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
