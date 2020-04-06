package com.suulola.order.controller;

import com.suulola.order.controller.dto.Response;
import com.suulola.order.model.Order;
import com.suulola.order.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/hello")
    public String helloWorld() {
        return "Hello World";
    }


    @GetMapping("/")
    public Response getAllOrders() {
        return orderService.findAll();
    }

    @RequestMapping(value = "/userid/{id}", method = RequestMethod.GET)
    public Response getOrdersByUser(@PathVariable("id") Long id) {
        return orderService.findByUserId(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Response create(@RequestBody Order order) {
        System.out.println(order);
        System.out.println("ji");
        return orderService.create(order);
    }

}
