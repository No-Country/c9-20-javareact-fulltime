package ar.com.country.restaurant.dao.entities;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "promotions")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Promotion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "promotion_id")
    private Long id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private String startDate;

    @Column
    private String endDate;

    @Column
    private String status;

    @OneToMany(mappedBy = "promotion")
    private List<Dish> dishes;
}
