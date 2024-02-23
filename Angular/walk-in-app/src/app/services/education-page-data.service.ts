import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EducationPageDataService {

  constructor(private http:HttpClient) { }

  getdata()
  {
    return this.http.get("https://localhost:7148/api/DB/getData");
  }
  sendProfileData(data:any)
  {
    return this.http.post("https://localhost:7148/api/DB/check",data,{responseType:'text'});
  }
  getEmailChecked(data:any)
  {
    return this.http.post("https://localhost:7148/api/DB/isEmailPresent",data,{responseType:'json'});
  }

}
