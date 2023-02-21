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
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ItemCart> itemCart;


    public void addItemCart(ItemCart itemCart) {
        this.itemCart.add(itemCart);
        itemCart.setCart(this);
    }

    public void removeItemCart(ItemCart itemCart) {
        this.itemCart.remove(itemCart);
        itemCart.setCart(null);
    }

    public void emptyCart() {
        this.itemCart.forEach(this::removeItemCart);
    }

    public void calculateTotal() {
        this.itemCart.forEach(ItemCart::calculateSubTotal);
    }

    // generate order

    public void generateOrder() {
           Order order = Order.builder()
                    .cart(this)
                    .build();
            order.calculateTotal();
            order.generateReceipt();
    }
}