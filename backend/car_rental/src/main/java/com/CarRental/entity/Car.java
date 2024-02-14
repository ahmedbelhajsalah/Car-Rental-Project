package com.CarRental.entity;

import com.CarRental.dto.CarDto;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name = "cars")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String color;

    private String brand;

    private String type;

    private String transmission;

    private String description;

    private Long price;

    private Date year;

    @Column(columnDefinition = "longblob")
    private byte[] image;

    public CarDto getCarDto(){
        CarDto carDto = new CarDto();
        carDto.setId(id);
        carDto.setName(name);
        carDto.setBrand(brand);
        carDto.setColor(color);
        carDto.setTransmission(transmission);
        carDto.setDescription(description);
        carDto.setType(type);
        carDto.setYear(year);
        carDto.setPrice(price);
        carDto.setReturnedImage(image);
        return carDto;
    }
}
