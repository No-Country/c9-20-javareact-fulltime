package ar.com.country.restaurant.services;

import ar.com.country.restaurant.dao.entities.Order;

import java.util.List;

public interface OrderService {

    List<Order> getOrdersOfUser(Long userId);

    Order getOrderOfUser(Long userId);

    Order createOrder(Long userId, Long paymentMethodId);

    void cancelOrder(Order order);
}
