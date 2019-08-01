package team.lol.backend.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

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
    @JsonProperty(access = Access.WRITE_ONLY)
    private String id;
    //@JsonProperty(access = Access.WRITE_ONLY)	
    private String accountId;

    private int wins;
    private int losses;
    private int leaguePoints;

    private String tier;
    private String rank; 

}