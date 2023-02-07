package ar.com.country.restaurant.dao.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class ShoppingCart {
    @Id
    private Long id;
    private Long orderId;
    private int quantity;

    @OneToMany
    private List<Dish> dishes;

    public ShoppingCart() {
    }

    public ShoppingCart(Long id, Long orderId, int quantity) {
        this.id = id;
        this.orderId = orderId;
        this.quantity = quantity;
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

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


    public List<Dish> getDishes() {
        return dishes;
    }

    public void setDishes(List<Dish> dishes) {
        this.dishes = dishes;
    }
}
