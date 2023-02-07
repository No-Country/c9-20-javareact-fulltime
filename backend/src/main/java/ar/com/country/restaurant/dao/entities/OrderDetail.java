package ar.com.country.restaurant.dao.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class OrderDetail {
    @Id
    private Long id;
    @OneToOne(cascade = CascadeType.ALL)
    private Order order;
    private Long dishId;
    private Integer quantity;
    private Double subtotal;

    public OrderDetail() {
    }

    public OrderDetail(Long id, Order order, Long dishId, Integer quantity, Double price, Double subtotal) {
        this.id = id;
        this.order = order;
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

    public Order getOrderId() {
        return order;
    }

    public void setOrderId(Order orderId) {
        this.order = orderId;
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
