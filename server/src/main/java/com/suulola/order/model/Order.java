package com.suulola.order.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashMap;
import java.util.List;

@Entity
@Table(name = "orders")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Order extends AbstractAuditableEntity<User, Long> implements Serializable {

   private String foodName;
   private String foodDesc;
   private String imageUrl;
   private double actualPrice;
   private double promoPrice;

   // i don't know why the initialization below is throwing error
//   private List<String> ingredients;



     @ManyToOne(cascade = CascadeType.ALL)
     @JoinColumn(name = "userId", referencedColumnName = "id", insertable = false, updatable = false)
     private User user;


    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public String getFoodDesc() {
        return foodDesc;
    }

    public void setFoodDesc(String foodDesc) {
        this.foodDesc = foodDesc;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public double getActualPrice() {
        return actualPrice;
    }

    public void setActualPrice(double actualPrice) {
        this.actualPrice = actualPrice;
    }

    public double getPromoPrice() {
        return promoPrice;
    }

    public void setPromoPrice(double promoPrice) {
        this.promoPrice = promoPrice;
    }

     public User getUser() {
         return user;
     }

     public void setUser(User user) {
         this.user = user;
     }
}
