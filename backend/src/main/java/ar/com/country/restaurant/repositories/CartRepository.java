package ar.com.country.restaurant.repositories;

import ar.com.country.restaurant.dao.entities.Cart;
import ar.com.country.restaurant.dao.entities.ItemCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

    @Query("select c from Cart c where c.user.id = ?1")
    Optional<Cart> findCartByUserId(Long userId);

    @Query("select c from Cart c where c.id = ?1 and c.user.id = ?2")
    Optional<Cart> findCartByIdAndUserId(Long cartId, Long userId);

    @Query("select i from ItemCart i where i.cart.id = ?1")
    List<ItemCart> findAllItemsFromCart(Long cartId);





}
