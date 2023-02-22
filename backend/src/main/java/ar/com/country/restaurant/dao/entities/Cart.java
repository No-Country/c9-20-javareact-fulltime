package ar.com.country.restaurant.dao.entities;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "carts")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class Cart implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(mappedBy = "cart")
    private User user;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ItemCart> items;


    public void addItemCart(ItemCart itemCart) {
        this.items.add(itemCart);
        itemCart.setCart(this);
    }

    public void removeItemCart(ItemCart itemCart) {
        this.items.remove(itemCart);
        itemCart.setCart(null);
    }

    public void emptyCart() {
        this.items.forEach(this::removeItemCart);
    }

    public void calculateSubTotal() {
        this.items.forEach(ItemCart::calculateSubTotal);
    }

    public void generateOrder() {
        Order order = Order.builder()
                .cart(this)
                .build();
        order.calculateTotal();
        order.generateReceipt();
    }
}