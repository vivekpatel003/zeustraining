import { Injectable } from '@angular/core';
import {EducationPageDataService} from './education-page-data.service';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  experiencedData:any={
    yearOfExperience:'0',
    cCTC:'0',
    eCTC:'0',
    techExp:[],
    techExpName:[],
    otherExp:'',
    techFam:[],
    techFamName:[],
    otherFam:'',
    onNotice:'',
    endDate:'',
    duration:'',
    appeared:'',
    roleApplied:''
  };
  educationData:any={
    show:'Experienced',
    percentageVal:'',
    passingYear:'',
    qualification:'',
    stream:'',
    college:'',
    other:'',
    location:''
  };
  personalData:any={
    firstName:'',
    lastName:'',
    Email:'',
    countryCode:'',
    phoneNumber:'',
    uploadImage:'',
    portfolio:'',
    selectedJob:[],
    selectedJobNames:['designer','developer'],
    reffredPerson:'',
    notification:false
  };
  loginData={
    email:'',
    password:'',
    remember:''
  }
  card_form_data:any={
    timing:'',
    preferences:[],
    resume:''
};
  
  constructor(private edu : EducationPageDataService) { }

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
