package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.services_sumar;

@RestController
public class controller_helloworld {
    @Autowired
    private services_sumar service;

    @GetMapping("/")
    public int getMethodName(@RequestParam int param, int param2) {
        return service.suma(param, param2);
    }
    
}
