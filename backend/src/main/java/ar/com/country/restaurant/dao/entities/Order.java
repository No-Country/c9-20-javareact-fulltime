package ar.com.country.restaurant.dao.entities;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private User user;
    private String number;
    private Date createdAt;
    @OneToOne(mappedBy = "order", cascade = CascadeType.ALL)
    private OrderDetail orderDetail;


    public Order() {
    }

    public Order(Long id, Long userId ,String number, String description, Date createdAt) {
        this.id = id;
        this.number = number;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }


    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
