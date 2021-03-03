package com.example.demo.entities;
import javax.persistence.*;

@Entity
@Table(name="dvd")
public class Dvd {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="id")
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="genre")
    private String genre;

    @Column(name="starring")
    private String starring;

    @Column(name="director")
    private String director;

    @Column(name="format")
    private String format;

    @Column(name="rent")
    private boolean rent;

    @Column(name="buy")
    private boolean buy;

    @Column(name="Rprice")
    private String Rprice;

    @Column(name="Bprice")
    private String Bprice;

    public Dvd() {
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

    public String getStarring() {
        return starring;
    }

    public void setStarring(String starring) {
        this.starring = starring;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
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

    @Override
    public String toString() {
        return "Dvd{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", genre='" + genre + '\'' +
                ", starring='" + starring + '\'' +
                ", director='" + director + '\'' +
                ", format='" + format + '\'' +
                ", rent=" + rent +
                ", buy=" + buy +
                ", Rprice='" + Rprice + '\'' +
                ", Bprice='" + Bprice + '\'' +
                '}';
    }
}
