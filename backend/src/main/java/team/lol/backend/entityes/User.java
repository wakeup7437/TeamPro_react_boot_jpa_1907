package team.lol.backend.entityes;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@DynamicInsert
@Table(name="users")
public class User implements Serializable {
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Uno;
    @Column(name = "user_id", nullable = false, unique = true)  private  String userId;
    @Column(name = "user_name",nullable = false) private String userName;
    @Column(nullable = false ) String password;
    @Column(nullable = false ) String email;
    @CreationTimestamp private Timestamp regdate;
    
}