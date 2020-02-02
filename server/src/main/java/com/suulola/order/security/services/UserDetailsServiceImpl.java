package com.suulola.order.security.services;

import com.suulola.order.model.Role;
import com.suulola.order.model.User;
import com.suulola.order.repo.UserRepoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UserRepoImpl userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
            User user = userRepo.findByUsername(username);
           if (user == null) {
               new UsernameNotFoundException("User not found with username " + username);
           }
        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        for (Role role :user.getRoles()) {
            grantedAuthorities.add(new SimpleGrantedAuthority(role.getName()));

        }


    }
}
