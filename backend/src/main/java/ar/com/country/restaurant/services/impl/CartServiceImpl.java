package ar.com.country.restaurant.services.impl;

import ar.com.country.restaurant.dao.entities.Cart;
import ar.com.country.restaurant.dao.entities.ItemCart;
import ar.com.country.restaurant.repositories.CartRepository;
import ar.com.country.restaurant.services.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService{

    private final CartRepository cartRepository;

    @Override
    public List<ItemCart> getItemsFromCart(Long cartId) {
        return cartRepository.findAllItemsFromCart(cartId);
    }

    @Override
    public Cart saveCart(Cart cart) {
        if(cart.getId() == null) {
            return cartRepository.save(cart);
        } else {
            return cartRepository.saveAndFlush(cart);
        }
    }

}
