package ar.com.country.restaurant.dao.entities;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "orders")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Long id;

    @Column
    private Date createdAt;

    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    private String username;

    @Enumerated(EnumType.STRING)
    private CardType cardType;

    @Column
    private String cardNumber;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    private Cart cart;

    @Column
    private Double total;

    @OneToMany(
            mappedBy = "order",
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            orphanRemoval = true
    )
    private List<CartItem> items;


    @OneToOne(
            mappedBy = "order",
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY
    )
    private Receipt receipt;


    public void generateReceipt() {
        this.receipt = Receipt.builder()
                .order(this)
                .build();
    }

    public String endingCardNumbers(String number) {
        return number.substring(number.length() - 4);
    }

    public void copyNameOfCartUser(Cart cart) {
        this.username = cart.getUser().getName();
        user.setName(this.username);
    }

    public void copyItemsFromCart(Cart cart) {
        // copy items to a new list
        List<CartItem> cartItems = cart.getItems();
        // set the order of each item
        cartItems.forEach(item -> item.setOrder(this));
        // set the items of the order
        this.items = cartItems;
    }


    public void copyTotalFromCart(Cart cart) {
        this.total = cart.getSubTotal();
    }

    public void copyCardFromUser(PaymentMethod paymentMethod) {
        this.cardType = paymentMethod.getType();
        this.cardNumber = endingCardNumbers(paymentMethod.getNumber());
    }
}

