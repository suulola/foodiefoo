package com.suulola.order.controller;

import com.suulola.order.model.Order;
import com.suulola.order.repo.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/orders")
public class OrderController {

    @Autowired
    private OrderRepo orderRepo;



    @GetMapping("/")
    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }

    @RequestMapping(value = "/userid/{id}", method = RequestMethod.GET)
    public List<Order> getOrdersByUser(@PathVariable("id") Long id) {
        return orderRepo.findByUserId(id);
    }



}
