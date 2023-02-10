package ar.com.country.restaurant.dao.entities;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "shopping_carts")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class ShoppingCart implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    private Order order;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ItemCart> itemCart;
}