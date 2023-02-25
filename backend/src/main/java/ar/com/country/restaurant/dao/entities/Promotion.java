package ar.com.country.restaurant.dao.entities;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "promotions")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class Promotion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "discount_percentage")
    private Double discountPercentage;

    @OneToOne(fetch = FetchType.LAZY)
    private Dish dish;

}