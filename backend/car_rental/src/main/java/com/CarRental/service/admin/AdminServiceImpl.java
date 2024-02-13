package com.CarRental.service.admin;

import com.CarRental.dto.CarDto;
import com.CarRental.entity.Car;
import com.CarRental.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService{

    private final CarRepository carRepository;

    @Override
    public boolean postCar(CarDto carDto) throws IOException {
        try{
            Car car = new Car();
            car.setName(carDto.getName());
            car.setBrand(carDto.getBrand());
            car.setColor(car.getColor());
            car.setTransmission(carDto.getTransmission());
            car.setDescription(car.getDescription());
            car.setType(car.getType());
            car.setYear(carDto.getYear());
            car.setPrice(car.getPrice());
            car.setImage(car.getImage());
            carRepository.save(car);
            return true;
        } catch (Exception e){
            return false;
        }
    }
}
