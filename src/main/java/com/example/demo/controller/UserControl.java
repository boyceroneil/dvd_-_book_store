package com.example.demo.controller;
import com.example.demo.Impl.CRUD;
import com.example.demo.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class UserControl {
    private final CRUD crud;

    @Autowired
    public UserControl(@Qualifier("userIMPL")CRUD crud) {
        this.crud = crud;
    }

//    @PutMapping("/retrieveAccount")
//    public Object retrieveAccount(@PathVariable Object name, @PathVariable Object password){
//        return crud.identify(name,password);
//    }

    @PostMapping("/createAccount")
    public User createAccount(@RequestBody User user){
        user.setId(0);
        crud.saveUpdate(user);
        return  user;
    }

    @GetMapping("/login")
    public ModelAndView login(){
        ModelAndView mav = new ModelAndView("login");
        mav.addObject("user", new User());
        return mav;
    }

//    @PostMapping("/login")
//    public User login(@RequestBody User user){
//        crud.findName(user.getName());
//        return user;
//
//
////        User oauth = userService.loginByName(user.getName());
////        System.out.print(oauth);
////        if(Objects.nonNull(oauth)){
////            return "redirect:/";
////        } else{
////            return "redirect:/login";
////        }
//    }



    @PutMapping("/updateAccount")
    public User updateAccount(@RequestBody User user){
        crud.saveUpdate(user);
        return user;
    }

//    @DeleteMapping("/deleteAccount/{id}")
//    public String deleteAccount(@PathVariable int id){
//        crud.deleteId(id);
//        return "The user has unsubscribe from the bookstore. "+ id;
//
//    }
}
