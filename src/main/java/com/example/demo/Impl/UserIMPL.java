package com.example.demo.Impl;
import com.example.demo.entities.Book;
import com.example.demo.entities.User;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;

@Repository
public class UserIMPL implements CRUD{
    private final EntityManager manager;

    @Autowired
    public UserIMPL(EntityManager manager) {
        this.manager = manager;
    }


    @Override
    @Transactional
    public List<Object> searchAll() {
        return null;
    }

    @Override
    @Transactional
    public Object searchId(int theId) {
        return null;
    }



    @Override
    public List<Object> search(Object object) {
        return null;
    }

    @Override
    @Transactional
    public boolean identify(Object name, Object password) {
        boolean res= false;
        Session current = manager.unwrap(Session.class);
        Query<Object> query = current.createQuery("from Book");
        List<Object> list = query.list();
        for(int i =0; i <list.size(); i++){
            if(list.get(i).toString().contains(name.toString()) & list.get(i).toString().contains(password.toString())){
                res= true;
            }

        }
        return res;
    }

    @Override
    @Transactional
    public void saveUpdate(Object object) {
        Session current = manager.unwrap(Session.class);
        current.saveOrUpdate(object);
    }

    @Override
    @Transactional
    public void deleteId(int theId) {
        Session current = manager.unwrap(Session.class);
        User user = current.get(User.class, theId);
        current.delete(user);
    }
}
