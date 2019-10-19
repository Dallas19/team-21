/**
 * Model for the App user
 * UserID
 * Name
 * Email
 * Phone number
 * Medical Issue
 */

 export default class User {
    userID: int;
    name: string;
    email: string;
    phoneNumber: string;

    constructor(){
       userID = 12345;
       name = "Carl Banks";
       email = "email@email.com";
       phoneNumber = "832-212-9071";
       medicalIssue = "Epilespy";
    }
 }