package ar.com.country.restaurant.dao.entities;

import lombok.*;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.FullTextField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static java.util.Objects.isNull;
import static java.util.Objects.nonNull;

@Entity
@Table(name = "dishes")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Indexed(index = "dishes")
public class Dish implements WithImage {
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

    @Column
    private Integer portionPerUnit;

    @Column
    private Integer people;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "category_id",
            referencedColumnName = "category_id",
            nullable = false
    )
    private DishCategory category;

    @OneToOne(fetch = FetchType.LAZY)
    private Promotion promotion;

    @OneToMany(
            mappedBy = "dish",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    @ToString.Exclude
    private List<Comment> comments;

    public void addComment(Comment comment) {
        if (isNull(comments)) {
            comments = new ArrayList<>();
        }
        comments.add(comment);
        comment.setDish(this);
    }

    @Override
    public boolean hasImage() {
        return nonNull(image) && image.isValidImage();
    }

}
