package team.lol.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import team.lol.backend.util.LolApiService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:3000",maxAge = 3600)
@RestController
@RequestMapping("/lol")
public class LolApiController {

    @Autowired
    LolApiService service;
    
    @GetMapping("/test")
    public String test(){
        return "test";
    }

    //소환사 검색
    @GetMapping("/search/{sName}")
    public Object searchSummoner(@PathVariable String sName){
        //System.out.println("=============SUMMONER SEARCH===============");
        return service.getSummoner(sName);
    }
    //최근 게임 리스트
    @GetMapping("/list/{accountId}")
    public Object searchList(@PathVariable String accountId,@RequestParam String startIndex){
        //System.out.println("startindex==: "+startIndex);
        int startIndexint=Integer.parseInt(startIndex);
        int endIndex=startIndexint+8;
        return service.getGameList(accountId, startIndexint, endIndex);
    }

    //랭킹
    @GetMapping("/rank")
    public Object getRank() {
        return service.getRanking();
    }
    
    //key regenerate
    @GetMapping("/regenerate/{key}")
    public Boolean reGenerate(@PathVariable String key){
        return service.regenerate(key);
    }

    
}