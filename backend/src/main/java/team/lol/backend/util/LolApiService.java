package team.lol.backend.util;

import java.util.ArrayList;
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
import team.lol.backend.domain.PlayerDetailDto;
import team.lol.backend.domain.PlayerDto;
import team.lol.backend.domain.StatsDto;
import team.lol.backend.domain.SummonerDto;
import team.lol.backend.domain.UserInfo;

@Service
public class LolApiService {


    private static final String API_URL="https://kr.api.riotgames.com";
    private static final String API_KEY="RGAPI-bacc7f87-b6bb-44f3-b484-a2879353b986";
    private static final String HEADER_PARAM="X-Riot-Token";

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder){
        return builder.build();
    }
    @Autowired
    private RestTemplate rt;
    
    //Sercice//

    public Object getSummoner(String sName){
        System.out.println("=====GET SUMMONER====");
        SummonerDto dto1= getUnitInfoByNickName(sName);
        SummonerDto dto2=getUserLeagueBySummonerId(dto1.getId());
        System.out.println("====line======");
        dto2.setProfileIconId(dto1.getProfileIconId());
        dto2.setName(dto1.getName());
        dto2.setSummonerLevel(dto1.getSummonerLevel());
        dto2.setAccountId(dto1.getAccountId());
        dto2.setId(dto1.getId());  
        
        System.out.println("=============GET SUMMONER END================");
        return dto2;
    }
    public Object getGameList(String accountId,int startIndex,int endIndex){
        GameListDto map=getListByAccountId(accountId,startIndex,endIndex);
        //System.out.println("=====list start=====");
        
        //GameDto 
        map.getMatches().forEach(game->{
            
            //System.out.println("====start list one====");
            MatchDto match=getGameDetailByGameId(game.getGameId());
            //System.out.println("====end list one=====");
            game.setGameDuration(match.getGameDuration());
            //game.setMatch(match);
            Integer id=new Integer(-1);

            List<UserInfo> teams=new ArrayList<>();
            for(PlayerDto p : match.getPlayersList()){
                
                Map<String,String> m=p.getPlayer();
                if(accountId.equals(m.get("accountId"))){
                    p.setProfileIcon(m.get("profileIcon"));
                    p.setSummonerName(m.get("summonerName"));
                    id=p.getParticipantId();
                    //System.out.println("==find==id: "+id);
                }
                UserInfo user=new UserInfo();
                user.setParticipantId(p.getParticipantId());
                user.setName(m.get("summonerName"));
                teams.add(user);
            }
            
            final int intid=id;
            //System.out.println("XXXXid?: "+id);
            //여기서 팀원정보 가져올것
            int teamId=-1;
            for(int i=0;i<10;i++){
                PlayerDetailDto pd= match.getParticipants().get(i);
                UserInfo user=teams.get(i);
                if(intid==pd.getParticipantId()){
                    teamId=pd.getTeamId();
                    game.setStat(pd.getStats());
                    game.setWin(pd.getStats().getWin());
                }
                user.setChamp(pd.getChampionId());
                user.setTeamId(pd.getTeamId());
            } 
            game.setTeams(teams);
        });
        
        return map;
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