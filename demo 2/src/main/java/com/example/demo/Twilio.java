package com.example.demo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody; 

@Controller
public class Twilio {
    @GetMapping("/call")
    @ResponseBody
    public String respondToPhoneCall(){
         return "Welcome to Spring Boot";
    }
}
