package team.lol.backend;

import static org.junit.Assert.assertThat;

import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import team.lol.backend.util.RestTemplateUtil;

/**
 * LolApiTest
 */
@SpringBootTest
@RunWith(SpringRunner.class)
public class LolApiTest {

    @Autowired
    RestTemplateUtil util;

    @Test
    public void jsonRequestTest(){
        Map<String,Object> test=util.get2way("채형국");
        System.out.println("==========================================");
        
        for(String key : test.keySet()){
            System.out.println("key: "+key);
        }
        System.out.println("--------------------------------------");
        
        List<Map<Object,Object>> matches=(List)test.get("matches");
        int index=0;
        while(index<10){
            index++;
            Map<?,?> list=matches.get(index);
            System.out.println("val : "+list.toString());
            matches.get(index).forEach((k,v)->{
                System.out.println("k : "+k+", v : "+v);
                
            });
            System.out.println("xxxxxxxxxxxxxxxxxxxxxxxxxxxx");
            String game=util.getGameDetailByGameId(list.get("gameId").toString());
            System.out.println(game.toString());
        }
        // matches.forEach((i)->{
 
        // });
        //test.matches[0].gameId
        System.out.println("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    }

    @Test
    public void gameDtailTest(){
        String game=util.getGameDetailByGameId("3672377334");
        System.out.println(game);
    }
    @Test
    public void basicInfoTest(){
        String data = util.get2wayInfo("채형국");
        System.out.println("===============");
        System.out.println(data);
    }
    
}