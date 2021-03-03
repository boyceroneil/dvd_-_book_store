package com.example.demo.controller;
import com.example.demo.Impl.CRUD;
import com.example.demo.entities.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class BookControl {
    private final CRUD crud;

    @Autowired
    public BookControl(CRUD crud) {
        this.crud = crud;
    }

    @GetMapping("/receiveAllBook")
    public List<Object> searchAll(){
        return crud.searchAll();
    }

    @GetMapping("/receiveBookGenre/{genre}")
    public List<Object> searchGenre(@PathVariable Object object){
        return crud.search(object);
    }

    @GetMapping("/receiveAuthor/{author}")
    public List<Object> searchAuthor(@PathVariable Object object){
        return crud.search(object);
    }
    @GetMapping("/receivePublisher/{publisher}")
    public List<Object> searchPublisher(@PathVariable Object object){
        return crud.search(object);
    }
    @PostMapping("/registerBook")
    public Book registerBook(@RequestBody Book book){
        book.setId(0);
        crud.saveUpdate(book);
        return book;
    }


    @PutMapping("/updateBook")
    public Book updateBook(@RequestBody Book book){
        crud.saveUpdate(book);
        return book;
    }
    @DeleteMapping("/deleteBook/{id}")
    public String deleteBook(@PathVariable int id){

        crud.deleteId(id);
        return "The user has bought Book number "+ id +" from the database";
    }
}
