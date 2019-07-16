package team.lol.backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import team.lol.backend.entities.User;
import team.lol.backend.repositories.UserRepository;

@CrossOrigin(origins = "http://localhost:3000",maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired UserRepository repo;

    @PostMapping("/login")
    public Optional<User> Login(@RequestBody User user) {
        Optional<User> result = repo.findByEmailAndPassword(user.getEmail(),user.getPassword());
        System.out.println(user);
        // System.out.println(result.get().getPassword());
        // System.out.println(result);

        if (result.isPresent()) {
            return result;
        } else {
            return null;
        }

    }

    @PostMapping(value="join")
    public void Join(@RequestBody User user) {
        System.out.println("접속");
    }
    

}