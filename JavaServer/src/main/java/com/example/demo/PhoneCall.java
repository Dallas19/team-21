
package com.example.demo;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;

@Controller
public class PhoneCall {
	  public String account_sid = "xxxxxxxxxxxxxx";
	  public String auth_token = "xxxxxxxxxxxxxx";
	  public String phoneNumber = "+14807472545";
	  public String condition = "";
	  public ArrayList<String> timestamps = new ArrayList<String>();
	  
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
		  
		    Message message = Message.creator(new PhoneNumber(phoneNumber),
		        new PhoneNumber("+17602922451"), 
		        "This is an emergency text. Carl Banks will seizure soon.").create();

			  DateTimeFormatter date = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
			  LocalDateTime now = LocalDateTime.now();
			  System.out.println(date.format(now));
			  timestamps.add(date.format(now)); 
		    
		   System.out.println(message.getSid());
	       return "Welcome to Spring Boot";
	  }
	  
	  @GetMapping("/record")
	  @ResponseBody
	  public String record() {
		  String response = "";
		  for (int i = 0; i < timestamps.size(); i++)
			  response = response + timestamps.get(i) + "<br>";
		  return response;
	  }
	  
	  
	  @GetMapping("/settings")
	  @ResponseBody
	  public String settings(@RequestBody String setCondition, @RequestBody String setNumber) {
		  phoneNumber = setNumber;
		  condition = setCondition;
		  return "Settings updated";
	  }
}
