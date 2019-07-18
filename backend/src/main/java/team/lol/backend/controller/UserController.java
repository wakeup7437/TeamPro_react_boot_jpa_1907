package team.lol.backend.controller;

import java.util.HashMap;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    public HashMap<String,String> Join(@RequestBody User user) {
        // System.out.println("접속");
        HashMap<String,String> map = new HashMap<>();
        User entity = new User();
        // System.out.println(user.getUserName());
        // System.out.println(user.getPassword());
        // System.out.println(user.getEmail());
        // System.out.println(user);
        entity.setEmail(user.getEmail());
        entity.setPassword(user.getPassword());
        entity.setUserName(user.getUserName());
        // entity.setUno(user.getUno());
        // entity.setRegdate(user.getRegdate());
        repo.save(entity);
        map.put("RESULT","회원가입성공");
        return map;

    }

    @PutMapping("/update")
    public HashMap<String,String> update(@RequestBody User user){
        // System.out.println(user);
        HashMap<String,String> map = new HashMap<>();
        User entity = repo.findByEmail(user.getEmail());
        entity.setUserName(user.getUserName());
        entity.setEmail(user.getEmail());
        entity.setPassword(user.getPassword());
        repo.save(entity);
        map.put("result", "SUCCESE");
        return map;
    }
    

}