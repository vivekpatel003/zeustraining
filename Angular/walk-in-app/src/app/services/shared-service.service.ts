import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  educationData:any;
  experiencedData:any;
  loginData:any;
  personalData:any;
  
  constructor() { }

  updateEducationData(data:any):void
  {
    this.educationData=data;
  }

  updateExperiencedData(data:any):void{
    this.experiencedData=data;
  }
  updateLoginData(data:any):void{
    this.loginData=data;
  }
  updatePersonalInfoData(data:any):void{
    this.personalData=data;
  }
  
  getEducationData(){
      return  this.educationData; 
  }

  getPersonalInfoData(){
    return  this.personalData; 
  }
  
  getExperiencedData(){
    return this.experiencedData
  }

  getLoginData()
  {
    return this.loginData;
  }
}
