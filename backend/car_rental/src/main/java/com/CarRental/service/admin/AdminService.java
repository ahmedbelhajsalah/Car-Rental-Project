package com.CarRental.service.admin;

import com.CarRental.dto.CarDto;

import java.io.IOException;

public interface AdminService {

    boolean postCar(CarDto carDto) throws IOException;
}
