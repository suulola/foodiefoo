package com.suulola.order.repo;

import com.suulola.order.model.Order;

import java.util.List;

public interface OrderRepo {
        List<Order> findAll();
        List<Order> findByUserID(Long userid);
        Order findById(Long id);
        Order save(Order order);
        void delete(Long id);
        Order update(Order order);
}
