import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class SpecJobPageService {

  constructor(private http:HttpClient) { }
  
  getJobCardData()
  {
    return this.http.get("https://localhost:7148/api/DB/jobData");
  }
  getJobDetails(data:any)
  {
    return this.http.post("https://localhost:7148/api/DB/jobDetails",data,{responseType:'text'});
  }
  getformData()
  {
    return this.http.get("https://localhost:7148/api/DB/jobcardformData");
  }
  getUserFormData(data:any)
  {
    return this.http.post("https://localhost:7148/api/DB/UserDataStore",data,{responseType:'text'});
  }
}
