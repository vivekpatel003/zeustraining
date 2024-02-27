import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class SpecJobPageService {

  header! : HttpHeaders
  constructor(private http:HttpClient) {
     var token = sessionStorage.getItem('token');
     console.log("This is token",token);
    this.header= new HttpHeaders({
      Authorization : 'Bearer '+token
     });
   }
  
  getJobCardData()
  {
    return this.http.get("https://localhost:7148/api/DB/jobData",{headers:this.header});
  }
  getJobDetails(data:any)
  {
    return this.http.post("https://localhost:7148/api/DB/jobDetails",data,{responseType:'text',headers:this.header});
  }
  getformData()
  {
    return this.http.get("https://localhost:7148/api/DB/jobcardformData",{headers:this.header});
  }
  getUserFormData(data:any)
  {
    return this.http.post("https://localhost:7148/api/DB/UserDataStore",data,{responseType:'text',headers:this.header});
  }
  getHallTicketData(data:any)
  {
    return this.http.post("https://localhost:7148/api/DB/hallTicket",data,{headers:this.header});
  }
  getStatus(data:any)
  {
      return this.http.post("https://localhost:7148/api/DB/IsRequestMade",data,{responseType:'text',headers:this.header});
  }
}
