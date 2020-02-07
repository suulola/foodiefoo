package com.suulola.order.repo;

import com.suulola.order.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Role, Long> {
    Role findByRole(String role);
}
