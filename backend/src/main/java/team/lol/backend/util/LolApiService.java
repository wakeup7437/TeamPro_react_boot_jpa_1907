package team.lol.backend.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import team.lol.backend.domain.GameDto;
import team.lol.backend.domain.GameListDto;
import team.lol.backend.domain.MatchDto;
import team.lol.backend.domain.SummonerDto;

@Service
public class LolApiService {


    private static final String API_URL="https://kr.api.riotgames.com";
    private static final String API_KEY="RGAPI-e10cfa7b-cbcf-4a98-a60e-68785c80408a";
    private static final String HEADER_PARAM="X-Riot-Token";

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder){
        return builder.build();
    }
    @Autowired
    private RestTemplate rt;
    
    //Sercice//

    //@Transactional
    public Object getSummoner(String sName){
        System.out.println("=====GET SUMMONER====");
        SummonerDto dto1= getUnitInfoByNickName(sName);
        System.out.println("1:"+dto1);
        SummonerDto dto2=getUserLeagueBySummonerId(dto1.getId());
        
        System.out.println("2:"+dto2);
        dto2.setProfileIconId(dto1.getProfileIconId());
        dto2.setName(dto1.getName());
        dto2.setSummonerLevel(dto1.getSummonerLevel());
        dto2.setAccountId(dto1.getAccountId());
        dto2.setId(dto1.getId());
        
        GameListDto map=getListByAccountId(dto2.getAccountId(),0,10);
        System.out.println("=====list start=====");
        List<GameDto> list=map.getMatches();
        list.forEach(game->{
            //System.out.println(game);
            //System.out.println("========unit game end==========");
            MatchDto match=getGameDetailByGameId(game.getGameId());
            game.setGameDuration(match.getGameDuration());
            game.setMatch(match);
            //System.out.println(match);
            match.getPlayersList().forEach(a->{
                //System.out.println("player: "+a);
            });
            //System.out.println("=====unit game detail end=======");
            game.getChampion();
        });
        map.setUser(dto2);
        System.out.println("=============GET SUMMONER END================");
        return map;
    }


    //로테이션 영웅
    public String getRotation(){
        String url=API_URL+"/lol/platform/v3/champion-rotations";
        return rt.getForObject(url,String.class);
    }


/////private method

    //1.닉네임으로 기본데이터 가져오기
    private SummonerDto getUnitInfoByNickName(String nick){
        String url=API_URL+"/lol/summoner/v4/summoners/by-name/"+nick+"?api_key="+API_KEY;
        System.out.println("uri1===="+url);
        return rt.getForObject(url,SummonerDto.class);
    }
    //2-1summonerid로 리그기본정보 얻기(id)
    private SummonerDto getUserLeagueBySummonerId(String id){
        String url=API_URL+"/lol/league/v4/entries/by-summoner/"+id+"?api_key="+API_KEY;
        //HttpHeaders header= new HttpHeaders();
        //header.set(HEADER_PARAM,"RGAPI-43f98699-2fbf-4fbe-a48b-71a42430074c");
        SummonerDto[] dtos=rt.getForObject(url,SummonerDto[].class);
        System.out.println(dtos);
        return dtos[dtos.length-1];
    }
    //2-2acountId로 최근 전적 가져오기
    private GameListDto getListByAccountId(String accountId,int startIndex,int endIndex){
        String url=API_URL+"/lol/match/v4/matchlists/by-account/"
                    +accountId
                    +"?endIndex="+endIndex
                    +"&beginIndex="+startIndex
                    +"&api_key="+API_KEY;
        System.out.println("uri2====: "+url);
        return rt.getForObject(url,GameListDto.class);
    }
    //3 gameId(matchId)로 경기디테일 가져오기
    private MatchDto getGameDetailByGameId(Long gameId){
        String url=API_URL+"/lol/match/v4/matches/"+gameId+"?api_key="+API_KEY;
        return rt.getForObject(url,MatchDto.class);
    }

}