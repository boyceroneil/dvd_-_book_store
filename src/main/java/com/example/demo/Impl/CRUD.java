package com.example.demo.Impl;

import java.util.List;

public interface CRUD {
    List<Object> searchAll();
    Object searchId(int theId);
    List<Object> genreType(Object object);
    List<Object> authorName(Object object);
    void saveUpdate(Object object);//rent the book
    void deleteId(int theId);//bought the book
}
