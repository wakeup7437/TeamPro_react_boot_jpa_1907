package team.lol.backend;

import static org.junit.Assert.assertThat;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
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
        Map<String,String> test=util.get2way("채형국");
        //List<Map<String,String>> data=test.get("matches")
        System.out.println("==========================================");
        //test.forEach(i->{System.out.println(i.toString());});
        System.out.println(test.toString());
        // test.forEach(i->{
        //     System.out.println(i.toString());
        // });
        System.out.println("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        for(String key : test.keySet()){
            System.out.println("key: "+key);
        }
        System.out.println("--------------------------------------");
        //String matches=test.get("matches");
        //System.out.println(matches);
        //JsonParser parser=new JsonParser();
        //JSONArray
    }

    @Test
    public void basicInfoTest(){
        String data = util.get2wayInfo("채형국");
        System.out.println("===============");
        System.out.println(data);
    }
    
}