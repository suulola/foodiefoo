package com.suulola.order.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "orders")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Order extends AbstractAuditableEntity<User, Long> implements Serializable {

   private String foodContent;
   private String orderDate;
   private Boolean isFoodServed;


   @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "userId", referencedColumnName = "id", insertable = false, updatable = false)
    @JsonIgnore
    private User user;

    public String getFoodContent() {
        return foodContent;
    }

    public void setFoodContent(String foodContent) {
        this.foodContent = foodContent;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public Boolean getFoodServed() {
        return isFoodServed;
    }

    public void setFoodServed(Boolean foodServed) {
        isFoodServed = foodServed;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Order{" +
                "foodContent='" + foodContent + '\'' +
                ", orderDate='" + orderDate + '\'' +
                ", isFoodServed=" + isFoodServed +
                ", user=" + user +
                '}';
    }
}
