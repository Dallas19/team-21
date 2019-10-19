package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Controller
public class PhoneCall {
	  public static final String ACCOUNT_SID = "xxxxxxxxxxxxxx";
	  public static final String AUTH_TOKEN = "xxxxxxxxxxxxxx";
	  
	  public static void main(String[] args) {
		    		    
		  }
	  @GetMapping("/call")
	  @ResponseBody	  
	  public String respondToPhoneCall(){
		  Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

		    Message message = Message.creator(new PhoneNumber("+14807472545"),
		        new PhoneNumber("+17602922451"), 
		        "This is an emergency text. Carl Banks will seizure soon.").create();

		    System.out.println(message.getSid());
	       return "Welcome to Spring Boot";
	  }
}
