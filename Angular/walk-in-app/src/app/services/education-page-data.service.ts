import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EducationPageDataService {

  header! : HttpHeaders
  constructor(private http:HttpClient) { 
   var token = sessionStorage.getItem('token');
   console.log("This is token",token);
  this.header= new HttpHeaders({
    Authorization : 'Bearer '+token
   });

  }
  getdata()
  {

    return this.http.get("https://localhost:7148/api/DB/getData",{headers:this.header});
  }
  sendProfileData(data:any)
  {
    return this.http.post("https://localhost:7148/api/DB/check",data,{headers:this.header,responseType:'text'});
  }
  getEmailChecked(data:any)
  {
    console.log(this.header)
    return this.http.post("https://localhost:7148/api/DB/isEmailPresent",data,{headers:this.header,responseType:'json'});
  }
  sendMail(data:any)
  {
    return this.http.post("https://localhost:7148/api/DB/EmailSend",data,{headers:this.header,responseType:'text'});
  }

}
