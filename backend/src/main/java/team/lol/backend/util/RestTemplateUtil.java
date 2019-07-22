package team.lol.backend.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

@Component
public class RestTemplateUtil {


    private static final String API_URL="https://kr.api.riotgames.com";
    private static final String API_KEY="?api_key=RGAPI-43f98699-2fbf-4fbe-a48b-71a42430074c";
    private static final String HEADER_PARAM="X-Riot-Token";

    //싱글턴
    private static RestTemplate rt;
    @Autowired
    public RestTemplateUtil(RestTemplate restTemplate){
        this.rt=restTemplate;
    }

    @Transactional
    public Map<String,String> get2way(String nick){
        Map<String,String> map =getInfoByNickName(nick);
        Map<String,String> map2=getUserInfoByAccountId(map.get("accountId"));
        return map2;
    }
    public String get2wayInfo(String nick){
        Map<String,String> map =getInfoByNickName(nick);
        return getUserLeagueBySummonerId(map.get("id"));
    }

    //닉네임으로 기본데이터 가져오기
    private Map<String,String> getInfoByNickName(String nick){
        String url=API_URL+"/lol/summoner/v4/summoners/by-name/"+nick+API_KEY;
        System.out.println("uri1===="+url);
        return rt.getForObject(url,Map.class);
    }
    
    //acountId로 최근 전적 가져오기
    private Map<String,String> getUserInfoByAccountId(String accountId){
        String url=API_URL+"/lol/match/v4/matchlists/by-account/"+accountId+API_KEY;
        System.out.println("uri2===="+url);
        return rt.getForObject(url,Map.class);
    }
    //summonerid로 리그기본정보 얻기(id)
    private String getUserLeagueBySummonerId(String id){
        String url=API_URL+"/lol/league/v4/entries/by-summoner/"+id+API_KEY;
        //HttpHeaders header= new HttpHeaders();
        //header.set(HEADER_PARAM,"RGAPI-43f98699-2fbf-4fbe-a48b-71a42430074c");
        return rt.getForObject(url, String.class);
    }

    //championData
    public String getChampData(String champ){
        String url="";
        
        return null;
    }
}