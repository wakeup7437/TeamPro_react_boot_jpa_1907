package team.lol.backend.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/lol")
public class LolApiController {

    //소환사 기본정보
    @GetMapping("/summoner/{sName}")
    public String getSummoner(@PathVariable String sName) {
        System.out.println("===============SUMMONER INFO==================");
        return "test~~~~~";
    }

    //소환사 검색
    @GetMapping("/search/{sName}")
    public String searchSummoner(@PathVariable String sName){
        System.out.println("=============SUMMONER SEARCH===============");
        return null;
    }

    //랭킹
    @GetMapping("/rank/{param}")
    public String getMethodName(@RequestParam String param) {
        return null;
    }
    
    
    
}