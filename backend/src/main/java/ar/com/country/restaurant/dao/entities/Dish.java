package ar.com.country.restaurant.dao.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "dishes")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;
    @Column
    private String image;

    @Column(nullable = false)
    private Double price;

    @OneToOne(fetch = FetchType.LAZY)
    private DishCategory dishCategory;

    @OneToOne(fetch = FetchType.LAZY)
    private Promotion promotion;

}
