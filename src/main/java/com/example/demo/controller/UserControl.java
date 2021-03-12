package com.example.demo.controller;
import com.example.demo.Impl.CRUD;
import com.example.demo.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class UserControl {
    private final CRUD crud;

    @Autowired
    public UserControl(@Qualifier("userIMPL")CRUD crud) {
        this.crud = crud;
    }

    @GetMapping("/retrieveAccount/{name}/{password}")
    public boolean retrieveAccount(@PathVariable Object name, @PathVariable Object password){
        return crud.identify(name,password);
    }

    @PostMapping("/createAccount")
    public User createAccount(@RequestBody User user){
        user.setId(0);
        crud.saveUpdate(user);
        return  user;
    }
    @PutMapping("/updateAccount")
    public User updateAccount(@RequestBody User user){
        crud.saveUpdate(user);
        return user;
    }

    @DeleteMapping("/deleteAccount/{id}")
    public String deleteAccount(@PathVariable int id){
        crud.deleteId(id);
        return "The user has unsubscribe from the bookstore. "+ id;

    }
}
