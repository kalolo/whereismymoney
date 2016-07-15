package com.nearsoft.controller;


import com.nearsoft.dtos.JwtResponse;
import com.nearsoft.dtos.WebAuth;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.crypto.MacProvider;

@RestController
public class AuthController {

    Logger logger = LoggerFactory.getLogger(AuthController.class);

    @CrossOrigin
    @RequestMapping(value="/api/auth", method = RequestMethod.POST)
    public ResponseEntity<JwtResponse> login(@RequestBody final WebAuth user) {

        JwtResponse jwt = new JwtResponse();

        logger.info("WebAuth: " + user);

        if ( null == user.getEmail() || user.getEmail().isEmpty() || null == user.getPassword() || user.getPassword().isEmpty()) {
            return new ResponseEntity<>(jwt, HttpStatus.BAD_REQUEST);
        }

        // validate against db....


        String compactJwt = Jwts.builder()
                .setSubject( user.getEmail() )
                .claim("user", user)
                .signWith(SignatureAlgorithm.HS512, "whereisMyMoney!!")
                .compact();

        jwt.setToken(compactJwt);


        logger.info(" generateKey::: " + MacProvider.generateKey() );

        return new ResponseEntity<>(jwt, HttpStatus.OK);
    }
}