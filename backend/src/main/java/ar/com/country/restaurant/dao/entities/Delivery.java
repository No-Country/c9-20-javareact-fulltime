package ar.com.country.restaurant.dao.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Delivery {
    @Id
    private Long id;
    private String type;
    private String number;
    private String expirationDate;

    public Delivery() {
    }

    public Delivery(Long id, String type, String number, String expirationDate) {
        this.id = id;
        this.type = type;
        this.number = number;
        this.expirationDate = expirationDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
    }
}
