package ar.com.country.restaurant.dao.entities;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "dish_category")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DishCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Dish> dishes;
}