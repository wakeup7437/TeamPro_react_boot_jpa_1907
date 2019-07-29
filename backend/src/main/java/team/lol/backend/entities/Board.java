package team.lol.backend.entities;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
@ToString
@Table(name = "boards")
public class Board {
    @Getter
    public enum Category{
        FREE("자유"), //0
        CATE1("카테1"),
        CATE2("카테2"),
        CATE3("카테3"),
        CATE4("카테4"),
        CATE5("카테5"); //5
        private String cate;
        private Category(String s){
            this.cate=s;
        }
    }

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bno;
    @Column(name="writer",nullable = false) private String writer;
    @Column(name="title",nullable = false) private String title;
    @Enumerated(EnumType.ORDINAL) 
    @Column(name="category",nullable = false) private Category category;
    @Column(name="content",nullable = false) private String content;
    @Column(name="recommend") @ColumnDefault("0") String recommend;

    @CreationTimestamp private Timestamp regdate;

    //@JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name="bno")
    private List<Reply> replies;
    
}