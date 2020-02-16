package com.suulola.order.security.jwt;

import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;

@Component
public class JwtConfigurer extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {

    private JwtUtils jwtUtils;

    public JwtConfigurer(JwtUtils jwtUtils) {
        this.jwtUtils = jwtUtils;
    }

    @Override
    public void configure(
            HttpSecurity http) throws Exception
    {
        JwtTokenFilter customFilter = new JwtTokenFilter(jwtUtils);
        http.exceptionHandling().authenticationEntryPoint(new AuthEntryPointJwt())
                .and()
        .addFilterBefore(customFilter, UsernamePasswordAuthenticationFilter.class);

    }
}
