package team.lol.backend.entities;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.*;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * Board
 */
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@Setter
@Entity
@DynamicInsert
@ToString(exclude = "replies")
@Table(name = "boards")
public class Board {
    enum Category{
        FREE, //1
        CATE2,
        CATE3,
        CATE4,
        CATE5; //5
    }

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bno;
    @Column(name="writer",nullable = false) private String writer;
    @Column(name="title",nullable = false) private String title;
    //@Enumerated(EnumType.ORDINAL) 
    @Column(name="category",nullable = false) private int category;
    @Column(name="content",nullable = false) private String content;
    @Column(name="recommend") @ColumnDefault("0") String recommend;

    @CreationTimestamp private Timestamp regdate;

    @OneToMany(mappedBy = "boards", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Reply> replies;
    
}