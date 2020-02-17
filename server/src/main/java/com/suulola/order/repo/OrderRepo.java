package com.suulola.order.repo;

import com.suulola.order.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepo extends JpaRepository<Order, Long> {
        List<Order> findOrderByUserId(Long userid);

}
