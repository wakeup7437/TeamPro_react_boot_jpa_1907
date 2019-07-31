package team.lol.backend.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Lazy
@Data
public class SummonerDto {
    //summoner+userLeague


    private int profileIconId;	 
    private String name;		
    //public String puuid;	
    private long summonerLevel;
    //public long revisionDate;
    private String id;		
    private String accountId;

    private int wins;
    private int losses;

    private String tier;
    private String rank; 

}