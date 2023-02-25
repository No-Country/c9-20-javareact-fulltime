package ar.com.country.restaurant.dao.entities;

import lombok.*;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.FullTextField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;

import javax.persistence.*;

import static java.util.Objects.nonNull;

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

    @Embedded
    private DishImage image;

    @Column(nullable = false)
    private Double price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "category_id",
            referencedColumnName = "category_id",
            nullable = false
    )
    private DishCategory category;

    @OneToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    @JoinColumn(
            name = "promotion_id",
            referencedColumnName = "promotion_id"
    )
    private Promotion promotion;

    public boolean hasImage() {
        return nonNull(image) && image.isValidImage();
    }

    public boolean hasPromotion() {
        return nonNull(promotion) && promotion.isValidPromotion();
    }

    public void setPromotion(Promotion promotion) {
        this.promotion = promotion;
        this.promotion.setDish(this);
    }

}
