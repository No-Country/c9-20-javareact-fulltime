package ar.com.country.restaurant.dao.entities;

import lombok.*;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.FullTextField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;

import javax.persistence.*;

@Entity
@Table(name = "dishes")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Indexed(index = "dishes")
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @FullTextField(analyzer = "spanish")
    private String name;

    @Column(nullable = false)
    @FullTextField(analyzer = "spanish")
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
