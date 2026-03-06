package com.example.demo.services;

import org.springframework.stereotype.Service;

@Service
public class services_saludar {
    public String generateMessage(String name){
        return "Hello " + name;
    }
}
