package team.lol.backend.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import team.lol.backend.domain.SummonerDto;
import team.lol.backend.util.RestTemplateUtil;

/**
 * LolApiService
 */
@Service
public class LolApiService {

    @Autowired
    RestTemplateUtil rt;

    public Object getSummoner(String sName){
        System.out.println("=============getSummoner===================");
        //SummonerDto summoner = (SummonerDto) rt.getUnitInfoByNickName(sName);
        Object obj=rt.getUnitInfoByNickName(sName);
        //summoner = (SummonerDto)rt.getUserLeagueBySummonerId(summoner.getId());
        //Map<String,?> info = rt.getListByAccountId(unit.get("accountId"));
        return obj;
    }
    
}