package com.suulola.order.service;

import com.suulola.order.controller.dto.Response;
import com.suulola.order.model.Order;
import com.suulola.order.repo.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    OrderRepo orderRepo;


    public Response findAll() {
        Response response = new Response();
        try {
            List<Order> userOrders =  orderRepo.findAll();
            response.setAll("00", "Orders by user retrieved", userOrders);
        } catch (Exception e) {
            e.printStackTrace();
            response.setAll("99", "Orders cannot be retrieved", e.getMessage());
        }
        return  response;
    }

    public Response findByUserId(Long id) {
        Response response = new Response();
        try {
          List<Order> userOrders =  orderRepo.findOrderByUserId(id);
            response.setAll("00", "Orders by user retrieved", userOrders);
        } catch (Exception e) {
            e.printStackTrace();
            response.setAll("99", "Orders cannot be retrieved by user id", e.getLocalizedMessage());
        }
        return  response;
    }

    public Response create(Order order) {
        Response response = new Response();
        try {
            Order createdOrder =  orderRepo.saveAndFlush(order);
            System.out.println(createdOrder);
            response.setAll("00", "Order created successfully", createdOrder);
        } catch (Exception e) {
            e.printStackTrace();
            response.setAll("99", "Orders cannot be created", e.getMessage());
        }
        return  response;

    }
}
