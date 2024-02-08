package com.CarRental.controller;

import com.CarRental.dto.SignupRequest;
import com.CarRental.dto.UserDto;
import com.CarRental.entity.User;
import com.CarRental.service.auth.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<?> signupCustomer(@RequestBody SignupRequest signupRequest){
        if(authService.hasCustomerWithEmail(signupRequest.getEmail())){
            return new ResponseEntity<>("Customer already exist with this email", HttpStatus.NOT_ACCEPTABLE);
        }
        UserDto createdCustomerDto = authService.createCustomer(signupRequest);
        if(createdCustomerDto == null){
            return new ResponseEntity<>("Customer not Created, Come again Later", HttpStatus.CREATED);
        }
        return new ResponseEntity<>(createdCustomerDto, HttpStatus.CREATED);
    }
}
