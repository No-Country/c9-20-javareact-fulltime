package ar.com.country.restaurant.dao.entities;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "shopping_carts")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ShoppingCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shopping_cart_id")
    private Long id;

    @Column
    private Integer quantity;

    @OneToMany(fetch = FetchType.LAZY, orphanRemoval = true)
    private List<Dish> dishes;
}
