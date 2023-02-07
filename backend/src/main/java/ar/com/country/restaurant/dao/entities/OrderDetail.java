package ar.com.country.restaurant.dao.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "order_details")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_detail_id")
    private Long id;

    @Column
    private Integer quantity;

    @Column
    private Double subtotal;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id", referencedColumnName = "order_id")
    @ToString.Exclude
    private Order order;
}
