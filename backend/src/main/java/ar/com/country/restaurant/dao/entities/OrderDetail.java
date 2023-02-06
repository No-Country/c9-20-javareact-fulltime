package ar.com.country.restaurant.dao.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class OrderDetail {
    @Id
    private Long id;
    private Long orderId;
    private Long dishId;
    private Integer quantity;
    private Double subtotal;

    public OrderDetail() {
    }

    public OrderDetail(Long id, Long orderId, Long dishId, Integer quantity, Double price, Double subtotal) {
        this.id = id;
        this.orderId = orderId;
        this.dishId = dishId;
        this.quantity = quantity;
        this.subtotal = subtotal;
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


    public double getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(double subtotal) {
        this.subtotal = subtotal;
    }
}
