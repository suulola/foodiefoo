package com.suulola.order.repo;

import com.suulola.order.model.User;

import java.util.List;

public interface UserRepo {
    List<User> findAll();
    User findById(Long id);
    User findByUsername(String username);
    User save(User user);
    void delete(Long id);
    User update(User user);
}
