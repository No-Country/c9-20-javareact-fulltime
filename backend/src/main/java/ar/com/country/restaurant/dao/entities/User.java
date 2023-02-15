package ar.com.country.restaurant.dao.entities;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import static java.util.Objects.isNull;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(nullable = false, unique = true)
    private String dni;

    @Column
    private String name;

    @Column
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false)
    private UserRole role;

    @Column
    private String password;

    @Column
    private String phone;

    @OneToMany(
            mappedBy = "user",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL
    )
    private List<Order> orders;

    @OneToMany(
            mappedBy = "user",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL
    )
    private List<Address> addresses;

    @OneToMany(
            mappedBy = "user",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL
    )
    private List<PaymentMethod> paymentMethods;

    public void addAddress(Address address) {
        if (isNull(addresses)) {
            addresses = new ArrayList<>();
        }
        addresses.add(address);
        address.setUser(this);
    }

    public void addPaymentMethod(PaymentMethod paymentMethod) {
        if (isNull(paymentMethods)) {
            paymentMethods = new ArrayList<>();
        }
        paymentMethods.add(paymentMethod);
        paymentMethod.setUser(this);
    }
    
}
