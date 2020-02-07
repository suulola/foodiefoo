package com.suulola.order.model;


import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
   private Long id;

   private String foodContent;
   private String orderDate;
   private Boolean isFoodServed;
   private Long userId;

   public Long getId() {
       return id;
   }

   public void setId(Long id) {
       this.id = id;
   }

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

   public Long getUserId() {
       return userId;
   }

   public void setUserId(Long userId) {
       this.userId = userId;
   }


}
