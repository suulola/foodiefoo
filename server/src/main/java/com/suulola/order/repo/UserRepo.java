package com.suulola.order.repo;

import com.suulola.order.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepo extends JpaRepository<User, Long> {
    User findUserByUsername(String username);
    Optional<User> findByUsername(String username);
}
