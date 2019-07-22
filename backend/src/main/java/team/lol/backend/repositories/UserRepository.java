package team.lol.backend.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import team.lol.backend.entities.User;


public interface UserRepository extends CrudRepository<User,Long> {
    public Optional<User> findByEmailAndPassword(String email,String password);
    public Optional<User> findByEmail(String email);
}