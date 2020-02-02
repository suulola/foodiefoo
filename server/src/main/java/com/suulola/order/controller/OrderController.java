package com.suulola.order.controller;

import com.suulola.order.model.Order;
import com.suulola.order.repo.OrderRepoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/v1/order")
public class OrderController {

    private OrderRepoImpl orderRepo;

    @Autowired
    public OrderController(OrderRepoImpl orderRepo) {
        this.orderRepo = orderRepo;
    }



    @GetMapping("/")
    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }

    @RequestMapping(value = "/userid/{id}", method = RequestMethod.GET)
    public List<Order> getOrdersByUser(@PathVariable("id") Long id) {
        return orderRepo.findByUserID(id);
    }
}
