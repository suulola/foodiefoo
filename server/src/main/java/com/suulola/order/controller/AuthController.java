package com.suulola.order.controller;

import com.suulola.order.controller.dto.AuthRequest;
import com.suulola.order.model.User;
import com.suulola.order.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private static final Logger LOGGER  = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/", method = RequestMethod.GET, produces = "application/json")
    public String helloWorld() {
        System.out.println("hey");
        return "Hello there";
    }


    @GetMapping("/users")
    public List<User>  getAllUsers() {
        LOGGER.info("printing out getAllUsers()" + userService.findAll().toString());
        return userService.findAll();
    }


    @PostMapping("/register")
    public User saveUser(@RequestBody User user) {
        return userService.save(user);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable("id") Long id) {
        userService.deleteById(id);
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody User user) {
        User userExists = userService.findUserByUsername(user.getUsername());
        if(userExists != null) {
            throw new BadCredentialsException("User with username: " + user.getUsername() + "already exists" );
        }
        userService.save(user);
        Map<Object, Object> model = new HashMap<>();
        model.put("message", "User registered successfully");
        model.put("data", user);
        return ResponseEntity.ok(model);
    }






}
