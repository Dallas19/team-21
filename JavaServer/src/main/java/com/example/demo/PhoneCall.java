
package com.example.demo;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Controller
public class PhoneCall {
	  public String account_sid = "xxxxxxxxxxxxxx";
	  public String auth_token = "xxxxxxxxxxxxxx";
	  
	  public static void main(String[] args) {
		    		    
		  }
	  @GetMapping("/call")
	  @ResponseBody	  
	  public String respondToPhoneCall() throws FileNotFoundException{
		  
		  System.out.println("Working Directory = " +
	              System.getProperty("user.dir"));
		  File text = new File(System.getProperty("user.dir") + "/../credentials.txt");
		  Scanner scan = new Scanner(text);
		  
		  account_sid = scan.nextLine();
		  auth_token = scan.nextLine();
		  
		  Twilio.init(account_sid, auth_token);
		  
		    Message message = Message.creator(new PhoneNumber("+14807472545"),
		        new PhoneNumber("+17602922451"), 
		        "This is an emergency text. Carl Banks will have a seizure soon.").create();

		    System.out.println(message.getSid());
	       return "Welcome to Spring Boot";
	  }
}
