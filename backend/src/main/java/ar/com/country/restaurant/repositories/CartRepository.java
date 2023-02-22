package ar.com.country.restaurant.repositories;

import ar.com.country.restaurant.dao.entities.Cart;
import ar.com.country.restaurant.dao.entities.ItemCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

    @Query("select i from ItemCart i where i.cart.id = ?1")
    List<ItemCart> findAllItemsFromCart(Long cartId);

}
