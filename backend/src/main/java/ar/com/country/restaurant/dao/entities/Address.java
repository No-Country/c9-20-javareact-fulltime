package ar.com.country.restaurant.dao.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "adresses")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "adress_id")
    private Long id;

    @Column
    private String street;

    @Column
    private String number;

    @Column
    private String city;

    @Column
    private String state;

    @Column
    private String country;

    @Column
    private String zipCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
