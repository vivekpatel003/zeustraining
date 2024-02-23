import { Component } from '@angular/core';
import { SharedServiceService } from '../../services/shared-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrl: './summery.component.scss'
})
export class SummeryComponent {
  createButton:boolean= true;
  backButton:string='summery';
    personalData:any={
      firstName:this.SharedServiceService.personalData.firstName,
      lastName:this.SharedServiceService.personalData.lastName,
      Email:this.SharedServiceService.personalData.Email,
      countryCode:this.SharedServiceService.personalData.countryCode,
      phoneNumber:this.SharedServiceService.personalData.phoneNumber,
      uploadImage:this.SharedServiceService.personalData.uploadImage,
      portfolio:this.SharedServiceService.personalData.portfolio,
      selectedJob:this.SharedServiceService.personalData.selectedJob,
      reffredPerson:this.SharedServiceService.personalData.reffredPerson,
      notification:this.SharedServiceService.personalData.notification.toString()
    };
    educationQualificationData:any={
      show:this.SharedServiceService.educationData.show,
      percentageVal:this.SharedServiceService.educationData.percentageVal,
      passingYear:this.SharedServiceService.educationData.passingYear,
      qualification:this.SharedServiceService.educationData.qualification,
      stream:this.SharedServiceService.educationData.stream,
      college:this.SharedServiceService.educationData.college,
      other:this.SharedServiceService.educationData.other,
      location:this.SharedServiceService.educationData.location
    };
  
    professionalQualificationData:any={
      yearOfExperience:this.SharedServiceService.experiencedData.yearOfExperience,
      cCTC:this.SharedServiceService.experiencedData.cCTC,
      eCTC:this.SharedServiceService.experiencedData.eCTC,
      techExp:this.SharedServiceService.experiencedData.techExp,
      otherExp:this.SharedServiceService.experiencedData.otherExp,
      techFam:this.SharedServiceService.experiencedData.techFam,
      otherFam:this.SharedServiceService.experiencedData.otherFam,
      onNotice:this.SharedServiceService.experiencedData.onNotice,
      endDate:this.SharedServiceService.experiencedData.endDate,
      duration:this.SharedServiceService.experiencedData.duration,
      appeared:this.SharedServiceService.experiencedData.appeared,
      roleApplied:this.SharedServiceService.experiencedData.roleApplied
    };
   
    Personaldata:any = {
      "email":this.personalData.Email , 
      "firstName":this.personalData.firstName,
      "lastName": this.personalData.lastName ,
      "phoneNumber": this.personalData.phoneNumber + this.personalData.countryCode ,
      "resumeString":this.personalData.uploadImage,
      "portfolioUrl": this.personalData.portfolio ,
      "employeeReffered":this.personalData.reffredPerson,
      "isEmailNotification": (this.personalData.notification) ? 1:0
    }
    data:any = {
      "show":this.educationQualificationData.show,
      "email":  this.personalData.Email,
      "firstName":this.personalData.firstName,
      "lastName":  this.personalData.lastName,
      "phoneNumber": this.personalData.phoneNumber + this.personalData.countryCode,
      "resumeString":this.personalData.uploadImage,
      "portfolioUrl": this.personalData.portfolio ,
      "employeeReffered":this.personalData.reffredPerson,
      "isEmailNotification":(this.personalData.notification) ? 1:0,
      "preferedJobs": this.personalData.selectedJob,
      "percentage":parseFloat(this.educationQualificationData.percentageVal),
      "passingYear":parseInt(this.educationQualificationData.passingYear),
      "qId": parseInt(this.educationQualificationData.qualification),
      "sId":parseInt(this.educationQualificationData.stream),
      "cId":parseInt(this.educationQualificationData.college),
      "collegeLocation": this.educationQualificationData.location,
      "collegeName": this.educationQualificationData.other,
      "yearsOfExperience":parseInt(this.professionalQualificationData.yearOfExperience),
      "currentCtc": parseInt( this.professionalQualificationData.cCTC),
      "expectedCtc":parseInt(this.professionalQualificationData.eCTC),
      "onNoticePeriod": this.professionalQualificationData.onNotice=="Yes" ? true : false ,
      "otherTechnologies": this.professionalQualificationData.otherExp,
      "endDate": this.professionalQualificationData.endDate,
      "duration":  this.professionalQualificationData.duration,
      "testAppeared": this.professionalQualificationData.appeared=="Yes" ? true : false ,
      "roleApplied":this.professionalQualificationData.roleApplied,
      "techExpertise": this.professionalQualificationData.techExp,
      "techFamiliar": this.professionalQualificationData.techFam
    }
  

    constructor(private SharedServiceService:SharedServiceService,private router:Router){
    }

    navigateFunction():void{
      this.router.navigate(['/education']);
    }

}
