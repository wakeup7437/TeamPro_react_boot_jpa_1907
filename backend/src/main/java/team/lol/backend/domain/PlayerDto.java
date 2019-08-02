package team.lol.backend.domain;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * PlayerDto
 */
@Data @Component @Lazy
public class PlayerDto {
    private int participantId;
    
    private Map<String,String> player;
    private String profileIcon;
    private String summonerName;
}