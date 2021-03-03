package com.example.demo.controller;

import com.example.demo.Impl.CRUD;
import com.example.demo.entities.Dvd;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class DvdControl {
    private final CRUD crud;

    @Autowired
    public DvdControl(@Qualifier("dvdIMPL") CRUD crud) {
        this.crud = crud;
    }
    @GetMapping("/receiveAllDvd")
    public List<Object> searchAll(){
        return crud.searchAll();
    }

    @GetMapping("/receiveDvdGenre/{genre}")
    public List<Object> searchGenre(@PathVariable Object object){
        return crud.genreType(object);
    }

    @GetMapping("/receiveDvdDirector/{director}")
    public List<Object> searchDirector(@PathVariable Object object){
        return crud.authorName(object);
    }

    @PostMapping("/registerDvd")
    public Dvd registerUserLogin(@RequestBody Dvd dvd){
        dvd.setId(0);
        crud.saveUpdate(dvd);
        return dvd;
    }


    @PutMapping("/updateDvd")
    public Dvd updateUserLogin(@RequestBody Dvd dvd){
        crud.saveUpdate(dvd);
        return dvd;
    }
    @DeleteMapping("/deleteDvd/{id}")
    public String deleteUserLogin(@PathVariable int id){

        crud.deleteId(id);
        return "The user has bought dvd number "+ id +" from the database";
    }
}
