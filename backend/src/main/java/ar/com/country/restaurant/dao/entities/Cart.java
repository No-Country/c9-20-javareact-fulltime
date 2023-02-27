package ar.com.country.restaurant.dao.entities;

import ar.com.country.restaurant.exceptions.ItemNotFoundException;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
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

    @OneToOne(fetch = FetchType.LAZY)
    private User user;

    @OneToMany(
            mappedBy = "cart",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL
    )
    private List<ItemCart> items;


    public void addItemCart(ItemCart itemCart) {
        if (this.items == null) {
            this.items = new ArrayList<>();
        }
        this.items.add(itemCart);
        itemCart.setCart(this);
    }

    public void removeItemCart(Long itemId) {
        ItemCart itemCart = this.items.stream()
                .filter(item -> item.getId().equals(itemId))
                .findFirst()
                .orElseThrow(() -> new ItemNotFoundException("Item not found"));
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