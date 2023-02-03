package ar.com.country.restaurant.dao.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class OrderDetail {
    @Id
    private Long id;
    private Long orderId;
    private Long dishId;
    private int quantity;
    private double price;

    public OrderDetail() {
    }

    public OrderDetail(Long id, Long orderId, Long dishId, int quantity, double price) {
        this.id = id;
        this.orderId = orderId;
        this.dishId = dishId;
        this.quantity = quantity;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getDishId() {
        return dishId;
    }

    public void setDishId(Long dishId) {
        this.dishId = dishId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
