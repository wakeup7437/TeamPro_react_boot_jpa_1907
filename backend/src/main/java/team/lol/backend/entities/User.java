package team.lol.backend.entities;

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
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@DynamicInsert
@DynamicUpdate
@Table(name="users")
public class User implements Serializable {
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Uno;
    @Column(name = "user_name",nullable = false) private String userName;
    @Column(nullable = false) String password;
    @Column(nullable = false, unique = true) String email;
    @CreationTimestamp private Timestamp regdate;
    @UpdateTimestamp private Timestamp updatedate;
    private String npass;
    
}