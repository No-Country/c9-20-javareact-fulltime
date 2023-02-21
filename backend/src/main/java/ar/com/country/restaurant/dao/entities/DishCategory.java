package ar.com.country.restaurant.dao.entities;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "dish_categories")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DishCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private Long id;

    @Column
    private String name;

    @Column
    private String imgUrl;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Dish> dishes;
}
