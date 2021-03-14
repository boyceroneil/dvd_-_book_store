package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name="books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="id")
    private int id;

    @Column(name="url")
    private String url;

    @Column(name="name")
    private String name;

    @Column(name="genre")
    private String genre;

    @Column(name="author")
    private String author;

    @Column(name="publisher")
    private String publisher;

    @Column(name="rent")
    private boolean rent;

    @Column(name="buy")
    private boolean buy;

    @Column(name="Rprice")
    private String Rprice;

    @Column(name="Bprice")
    private String Bprice;

    public Book() {
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", url='" + url + '\'' +
                ", name='" + name + '\'' +
                ", genre='" + genre + '\'' +
                ", author='" + author + '\'' +
                ", publisher='" + publisher + '\'' +
                ", rent=" + rent +
                ", buy=" + buy +
                ", Rprice='" + Rprice + '\'' +
                ", Bprice='" + Bprice + '\'' +
                '}';
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public boolean isRent() {
        return rent;
    }

    public void setRent(boolean rent) {
        this.rent = rent;
    }

    public boolean isBuy() {
        return buy;
    }

    public void setBuy(boolean buy) {
        this.buy = buy;
    }

    public String getRprice() {
        return Rprice;
    }

    public void setRprice(String rprice) {
        Rprice = rprice;
    }

    public String getBprice() {
        return Bprice;
    }

    public void setBprice(String bprice) {
        Bprice = bprice;
    }

}
