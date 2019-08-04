package team.lol.backend.util;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import team.lol.backend.domain.GameDto;
import team.lol.backend.domain.GameListDto;
import team.lol.backend.domain.MatchDto;
import team.lol.backend.domain.PlayerDto;
import team.lol.backend.domain.SummonerDto;

@Service
public class LolApiService {


    private static final String API_URL="https://kr.api.riotgames.com";
    private static final String API_KEY="RGAPI-c031daa5-dde2-4023-b669-a80e99e6c669";
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
        System.out.println("3:"+dto2);
        
        
        System.out.println("=============GET SUMMONER END================");
        return dto2;
    }
    public Object getGameList(String accountId,int startIndex,int endIndex){
        GameListDto map=getListByAccountId(accountId,startIndex,endIndex);
        //List<GameDto> list=map.getMatches();
        System.out.println("=====list start=====");
        map.getMatches().forEach(game->{
            MatchDto match=getGameDetailByGameId(game.getGameId());
            game.setGameDuration(match.getGameDuration());
            game.setMatch(match);
            Integer id=new Integer(-1);
            List<PlayerDto> plist=match.getPlayersList();
            for(PlayerDto p : plist){
                Map<String,String> m=p.getPlayer();
                // if(dto2.getName().equals(m.get("summonerName"))){
                //     p.setProfileIcon(m.get("profileIcon"));
                //     p.setSummonerName(m.get("summonerName"));
                //     id=p.getParticipantId();
                // }
            }

            // match.getPlayersList().forEach(p->{
            //     Map<String,String> m=p.getPlayer();
            //     if(dto2.getName().equals(m.get("summonerName"))){
            //         p.setProfileIcon(m.get("profileIcon"));
            //         p.setSummonerName(m.get("summonerName"));
            //         id=p.getParticipantId();
            //     }  
            // });
            final int intid=id;
            match.getParticipants().forEach(p->{
                if(intid==p.getParticipantId()){
                    System.out.println(p.getStats());
                    System.out.println();
                    game.setStat(p.getStats());
                }
            });
            //System.out.println("=====unit game detail end=======");
            game.getChampion();
        });
        
        return null;
    }


    //로테이션 영웅
    public String getRotation(){
        String url=API_URL+"/lol/platform/v3/champion-rotations";
        return rt.getForObject(url,String.class);
    }

    //랭킹
    public Object getRanking(){
        String url=API_URL+"/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?api_key="+API_KEY;
        return rt.getForObject(url,List.class);
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