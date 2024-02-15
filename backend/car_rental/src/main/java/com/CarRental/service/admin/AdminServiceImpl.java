package com.CarRental.service.admin;

import com.CarRental.dto.CarDto;
import com.CarRental.entity.Car;
import com.CarRental.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

    @Override
    public List<CarDto> getAllCars() {
        return carRepository.findAll().stream().map(Car::getCarDto).collect(Collectors.toList());
    }

    @Override
    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }

    @Override
    public CarDto getCarById(Long id) {
        Optional<Car> optionalCar = carRepository.findById(id);
        return optionalCar.map(Car::getCarDto).orElse(null);
    }

    @Override
    public boolean updateCar(Long carId, CarDto carDto) {
        Optional<Car> optionalCar = carRepository.findById(carId);
        if(optionalCar.isPresent()){
            Car car = optionalCar.get();
            car.setBrand(carDto.getBrand());
            car.setType(car.getType());
            car.setName(car.getName());
            car.setYear(carDto.getYear());
            car.setPrice(carDto.getPrice());
            car.setDescription(car.getDescription());
            car.setColor(carDto.getColor());
            carRepository.save(car);
            return true;
        } else {
            return false;
        }

    }


}
