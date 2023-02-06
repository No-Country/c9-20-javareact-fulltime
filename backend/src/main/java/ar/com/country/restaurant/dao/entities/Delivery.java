package ar.com.country.restaurant.dao.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Delivery {
    @Id
    private Long id;
    private Long orderId;
    private Long addressId;
    private String status;

    public Delivery() {
    }

    public Delivery(Long id, Long orderId, Long addressId, String status) {
        this.id = id;
        this.orderId = orderId;
        this.addressId = addressId;
        this.status = status;
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

    public Long getAddressId() {
        return addressId;
    }

    public void setAddressId(Long addressId) {
        this.addressId = addressId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
