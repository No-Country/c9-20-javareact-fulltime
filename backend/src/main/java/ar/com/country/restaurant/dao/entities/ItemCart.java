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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_id")
    private Cart cart;

    @ManyToOne(optional = false)
    @JoinColumn(name = "dish_id")
    private Dish dish;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Order order;
    @Column
    private int quantity;

    @Column
    private Double subTotal;


    public void calculateSubTotal() {
        this.subTotal = this.dish.getPrice() * this.quantity;
    }

}