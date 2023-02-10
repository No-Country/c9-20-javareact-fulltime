package ar.com.country.restaurant.dao.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "items_cart")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class ItemCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private int quantity;
    @ManyToOne(optional = false)
    private Dish dish;

    public void addQuantity(int quantity) {
        this.quantity += quantity;
    }

    public void removeQuantity(int quantity) {
        this.quantity -= quantity;
    }

    public boolean isEmpty() {
        return quantity == 0;
    }

    public boolean isNotEmpty() {
        return !isEmpty();
    }

    public boolean isSameDish(Dish dish) {
        return this.dish.getId().equals(dish.getId());
    }

}
