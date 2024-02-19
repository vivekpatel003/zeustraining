import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  authentication(data:any)
  {
    return this.http.post("http://localhost:5021/api/DB/Login",data,{responseType:"json"});
  }

}
