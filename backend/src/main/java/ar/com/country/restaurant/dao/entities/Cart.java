package ar.com.country.restaurant.dao.entities;

import ar.com.country.restaurant.exceptions.ItemNotFoundException;
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

    public void removeItemCart(Long itemId) {
        ItemCart itemCart = this.items.stream()
                .filter(item -> item.getId().equals(itemId))
                .findFirst()
                .orElseThrow(() -> new ItemNotFoundException("Item not found"));
        this.removeItemCart(itemCart.getId());
    }

    public void emptyCart() {
        this.items.forEach(item -> item.setCart(null));
        this.items.clear();
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