package team.lol.backend.domain;

import java.sql.Timestamp;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import team.lol.backend.entities.Board.Category;

/**
 * BoardDto
 */
@Component @Lazy @Data
public class BoardDto {
    
    private Long bno;
    private String writer;
    private String title;
    private Category category;
    private String recommend;

    private Timestamp regdate;
    private int replies;
    
}