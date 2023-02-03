package ar.com.country.restaurant.dao.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Receipt {
    @Id
    private Long id;
    private Long orderId;
    private Long paymentId;
    private Long deliveryId;
    private double total;

    public Receipt() {
    }

    public Receipt(Long id, Long orderId, Long paymentId, Long deliveryId, double total) {
        this.id = id;
        this.orderId = orderId;
        this.paymentId = paymentId;
        this.deliveryId = deliveryId;
        this.total = total;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(Long paymentId) {
        this.paymentId = paymentId;
    }

    public Long getDeliveryId() {
        return deliveryId;
    }

    public void setDeliveryId(Long deliveryId) {
        this.deliveryId = deliveryId;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }
}
