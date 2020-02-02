package com.suulola.order.controller;

import com.suulola.order.model.User;
import com.suulola.order.repo.UserRepoImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/users")
public class AuthController {

    private static final Logger LOGGER  = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private UserRepoImpl userRepo;

    @GetMapping("/hello")
    public String helloWorld() {
        return "Hello there";
    }


    @GetMapping("/")
    public List<User>  getAllUsers() {
        LOGGER.info("printing out getAllUsers()" + userRepo.findAll().toString());
        return userRepo.findAll();
    }


    @PostMapping("/")
    public User saveUser(@RequestBody User user) {
        return userRepo.save(user);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable("id") Long id) {
        userRepo.delete(id);
    }







}
