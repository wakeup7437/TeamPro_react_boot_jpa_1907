package team.lol.backend.domain;

import lombok.Data;

/**
 * PlayerDto
 */
@Data
public class PlayerDto {
    private int participantId;
    
    private int profileIcon;
    private String summonerName;
}