package ar.com.country.restaurant.services.impl;

import ar.com.country.restaurant.dao.entities.Cart;
import ar.com.country.restaurant.dao.entities.Order;
import ar.com.country.restaurant.dao.entities.OrderStatus;
import ar.com.country.restaurant.dao.entities.PaymentMethod;
import ar.com.country.restaurant.exceptions.CartEmptyException;
import ar.com.country.restaurant.exceptions.PaymentMethodNotFoundException;
import ar.com.country.restaurant.exceptions.UserNotFoundException;
import ar.com.country.restaurant.services.CartService;
import ar.com.country.restaurant.services.OrderService;
import ar.com.country.restaurant.services.PaymentMethodService;
import ar.com.country.restaurant.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@EnableScheduling
public class OrderServiceImpl implements OrderService {

    private final CartService cartService;

    private final PaymentMethodService paymentMethodService;

    private final UserService userService;

    @Override
    public List<Order> getOrdersOfUser(Long userId) {
        if(userService.getUserById(userId) == null) {
            throw new UserNotFoundException(userId);
        }
        return userService.getUserById(userId).getOrders();
    }

    @Override
    public Order getOrderOfUser(Long userId) {
        return userService
                .getUserById(userId)
                .getOrders()
                .get(userService.getUserById(userId).getOrders().size() - 1);
    }

    @Override
    public Order createOrder(Long userId, Long paymentMethodId) {
        Order order = new Order();

        Cart cart;
        if (cartService.getCartOfUser(userId) != null) {
            cart = cartService.getCartOfUser(userId);
        } else {
            throw new CartEmptyException(userId);
        }

        PaymentMethod paymentMethodOfUser;
        if (paymentMethodService.getPaymentMethodById(userId, paymentMethodId) != null) {
            paymentMethodOfUser = paymentMethodService.getPaymentMethodById(userId, paymentMethodId);
        } else {
            throw new PaymentMethodNotFoundException(paymentMethodId);
        }

        order.copyNameOfCartUser(cart);
        order.copyCardFromUser(paymentMethodOfUser);
        order.copyItemsFromCart(cart);
        order.copyTotalFromCart(cart);

        OrderStatus orderStatus = OrderStatus.PENDING;
        order.setStatus(orderStatus);


        cart.emptyCart();
        return order;
    }

    @Override
    public void cancelOrder(Order order) {
        order.setStatus(OrderStatus.CANCELLED);
    }

//    @Scheduled(fixedRate = 10000)
//    public void changeStatusToInProgress() {
//        order.setStatus(OrderStatus.IN_PROGRESS);
//    }
}
