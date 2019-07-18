package team.lol.backend.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/apitest")
public class LolApiController {

    @GetMapping("/json")
    public String getMethodName() {
        System.out.println("api test==================");
        return "test~~~~~";
    }
    
    
}