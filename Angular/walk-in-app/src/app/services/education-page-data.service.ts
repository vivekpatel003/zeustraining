import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class EducationPageDataService {

  constructor(private http:HttpClient) { }

  getdata()
  {
    return this.http.get("https://localhost:7148/api/DB/getData");
  }
  sendProfileData()
  {
    return this.http.post("https://localhost:7148/api/DB/",null,{responseType:"json"});
  }
}
