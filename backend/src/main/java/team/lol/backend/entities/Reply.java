package team.lol.backend.entities;

import java.sql.Timestamp;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * Reply
 */
@Getter
@Setter
@ToString
@Entity
@Table(name = "replies")
@EqualsAndHashCode(of = "rno")
public class Reply {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rno;
    private String reply;
    private String replyer;

    @CreationTimestamp
    private Timestamp replydate;

    @ManyToOne
    private Board boards;
}