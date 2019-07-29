package team.lol.backend.util;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

@Component
public class RestTemplateUtil {


    private static final String API_URL="https://kr.api.riotgames.com";
    private static final String API_KEY="?api_key=RGAPI-b1f6b9b1-7049-4ffa-9706-cb2344a2a6c9";
    private static final String HEADER_PARAM="X-Riot-Token";

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder){
        return builder.build();
    }
    @Autowired
    private RestTemplate rt;
    
    // public RestTemplateUtil(RestTemplate restTemplate){
    //     this.rt=restTemplate;
    // }
    
    @Transactional
    public Map<String,Object> get2way(String nick){
        Map<String,String> map =getInfoByNickName(nick);
        Map<String,Object> map2=getUserInfoByAccountId(map.get("accountId"));
        return map2;
    }
    public String get2wayInfo(String nick){
        Map<String,String> map =getInfoByNickName(nick);
        return getUserLeagueBySummonerId(map.get("id"));
    }

    
    //1.닉네임으로 기본데이터 가져오기
    private Map<String,String> getInfoByNickName(String nick){
        String url=API_URL+"/lol/summoner/v4/summoners/by-name/"+nick+API_KEY;
        System.out.println("uri1===="+url);
        return rt.getForObject(url,Map.class);
    }
    //2-1summonerid로 리그기본정보 얻기(id)
    private String getUserLeagueBySummonerId(String id){
        String url=API_URL+"/lol/league/v4/entries/by-summoner/"+id+API_KEY;
        //HttpHeaders header= new HttpHeaders();
        //header.set(HEADER_PARAM,"RGAPI-43f98699-2fbf-4fbe-a48b-71a42430074c");
        return rt.getForObject(url, String.class);
    }
    //2-2acountId로 최근 전적 가져오기
    private Map<String,Object> getUserInfoByAccountId(String accountId){
        String url=API_URL+"/lol/match/v4/matchlists/by-account/"+accountId+API_KEY;
        System.out.println("uri2===="+url);
        return rt.getForObject(url,Map.class);
    }
    //3gameId로 경기디테일 가져오기
    public String getGameDetailByGameId(String gameId){
        String url=API_URL+"/lol/match/v4/matches/"+gameId+API_KEY;
        return rt.getForObject(url,String.class);
    }
    

    //로테이션 영웅
    public String getRotation(){
        String url=API_URL+"/lol/platform/v3/champion-rotations";
        return rt.getForObject(url,String.class);
    }

}