package com.CarRental.service.auth;

import com.CarRental.dto.SignupRequest;
import com.CarRental.dto.UserDto;

public interface AuthService {

    UserDto createCustomer(SignupRequest signupRequest);

    boolean hasCustomerWithEmail(String email);
}
