package com.example.demo.Impl;

import com.example.demo.entities.Dvd;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;

@Repository
public class DvdIMPL implements CRUD {
    private final EntityManager manager;

    @Autowired
    public DvdIMPL(EntityManager manager) {
        this.manager = manager;
    }

    @Override
    @Transactional
    public List<Object> searchAll() {
        Session current = manager.unwrap(Session.class);
        Query<Object> query = current.createQuery("from Dvd");
        return query.getResultList();    }


    @Override
    @Transactional
    public Object searchId(int theId) {
        return null;
    }


//    @Override
//    @Transactional
//    public List<Object> genreType(Object object) {
//        Session current= manager.unwrap(Session.class);
//        Query<Object> query = current.createQuery("from Dvd");
//        List list = query.list();
//        return Collections.singletonList(list.stream().filter(i -> i.toString().contains(object.toString())));
//    }

    @Override
    @Transactional
    public List<Object> search(Object object) {
        Session current= manager.unwrap(Session.class);
        Query<Object> query = current.createQuery("from Dvd");
        List list = query.list();
        return Collections.singletonList(list.stream().filter(i -> i.toString().contains(object.toString())));
    }

    @Override
    public Object identify(Object name, Object password) {
        return false;
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
        Dvd dvd = current.get(Dvd.class, theId);
        current.delete(dvd);
    }
}
