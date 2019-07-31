package team.lol.backend.domain;

import java.sql.Timestamp;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * BoardDto
 */
@Component @Lazy @Data
public class BoardDto {
    
    private Long bno;
    private String writer;
    private String title;
    private String category;
    private String recommend;

    private Timestamp regdate;
    private int replies;
    
}