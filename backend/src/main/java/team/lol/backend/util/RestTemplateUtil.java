package team.lol.backend.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

@Component
public class RestTemplateUtil {


    private static final String API_URL="https://kr.api.riotgames.com";
    private static final String API_KEY="?api_key=RGAPI-1498840a-9757-437b-9ba1-eb0dc14fa22c";

    //싱글턴
    private static RestTemplate restTemplate;
    @Autowired
    public RestTemplateUtil(RestTemplate restTemplate){
        this.restTemplate=restTemplate;
    }

    @Transactional
    public Map<String,String> get2way(String nick){
        Map<String,String> map =getInfoByNickName(nick);
        Map<String,String> map2=getUserInfoByAccountId(map.get("accountId"));
        return map2;
    }

    //닉네임으로 기본데이터 가져오기
    private Map<String,String> getInfoByNickName(String nick){
        String url=API_URL+"/lol/summoner/v4/summoners/by-name/"+nick+API_KEY;
        System.out.println("uri1===="+url);
        return restTemplate.getForObject(url,Map.class);
    }
    
    //acountId로 최근 전적 가져오기
    private Map<String,String> getUserInfoByAccountId(String accountId){
        String url=API_URL+"/lol/match/v4/matchlists/by-account/"+accountId+API_KEY;
        System.out.println("uri2===="+url);
        return restTemplate.getForObject(url,Map.class);
    }
}