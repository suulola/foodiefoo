package com.suulola.order.controller;

import com.suulola.order.controller.dto.AuthRequest;
import com.suulola.order.model.User;
import com.suulola.order.repo.UserRepo;
import com.suulola.order.security.jwt.JwtUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private static final Logger LOGGER  = LoggerFactory.getLogger(AuthController.class);

    private PasswordEncoder passwordEncoder;
    private UserRepo userRepo;
    private AuthenticationManager authenticationManager;
    private JwtUtils jwtUtils;

    public  AuthController(
            UserRepo userRepo,
            PasswordEncoder passwordEncoder,
            AuthenticationManager authenticationManager,
            JwtUtils jwtUtils
    ) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    @RequestMapping(value = "/hello", method = RequestMethod.GET, produces = "application/json")
    public String helloWorld() {
        System.out.println("hey");
        return "Hello there";
    }

    @GetMapping("/users")
    public List<User>  getAllUsers() {
        LOGGER.info("printing out getAllUsers()" + userRepo.findAll().toString());
        return userRepo.findAll();
    }


    @PostMapping("/signup")
    public ResponseEntity saveUser(@RequestBody AuthRequest authRequest) {

        try {
            User userExists = userRepo.findUserByUsername(authRequest.getUsername());
            if(userExists != null) {
                Map<Object, Object> model = new HashMap<>();
                model.put("message", userExists.getUsername() + " already exists");
                model.put("responseCode", "99");
                return ResponseEntity.badRequest().body(model);
            }
            User user = new User();
            user.setUsername(authRequest.getUsername());
            user.setPassword(passwordEncoder.encode(authRequest.getPassword()));
            user.setRoles(Arrays.asList(authRequest.getRoles()));
            this.userRepo.saveAndFlush(user);
            Map<Object, Object> model = new HashMap<>();
            model.put("message", user.getUsername() + " registered successfully");
            model.put("responseCode", "00");
            model.put("data", user);
            return ResponseEntity.ok(model);
        } catch (Exception e) {
            e.printStackTrace();
            throw  new BadCredentialsException(e.getMessage());
        }
    }

//    @RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
//
//    @GetMapping("/delete")
//    public void deleteUser(@PathVariable("id") Long id) {
//        userRepo.deleteById(id);
//    }

    @PostMapping("/signin")
    public ResponseEntity login(@RequestBody AuthRequest data) {

        try {
            System.out.println("kicking and alive");
            String username = data.getUsername();
            System.out.println(username);
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, data.getPassword()));
            System.out.println("user authenticated");
            String token = jwtUtils.createToken(username, this.userRepo.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Username " + username + "not found")).getRoles());
            System.out.println("token created");

            Map<Object, Object> model = new HashMap<>();
            model.put("username", username);
            model.put("token", token);
            System.out.println("hi");
            return ResponseEntity.ok().body(model);
        } catch (AuthenticationException e) {
            System.out.println("error");
            throw new BadCredentialsException("Invalid username/password supplied");

        }
    }







}
