import { Component } from '@angular/core';
import { SharedServiceService} from '../../services/shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent {
  createButton:boolean = false;
  backButton:string = "createAccount" ;
    jobs:{
      name:string,
      selected:boolean
    }[]=[
      { name:"Instructional Designer", selected:false},
      { name:"Software Engineer", selected:false},
      { name:"Software Quality Engineer", selected:false} 
    ]
    personalData={
      firstName:'',
      lastName:'',
      Email:'',
      countryCode:'',
      phoneNumber:'',
      uploadImage:'',
      portfolio:'',
      selectedJob:[],
      reffredPerson:'',
      notification:''
    }
    filled_data:any;
    constructor(private SharedServiceService:SharedServiceService,private router:Router){}
    getData():void
    {
      this.personalData.selectedJob = this.jobChoosen
      this.SharedServiceService.updatePersonalInfoData(this.personalData);
      console.log(this.SharedServiceService.getPersonalInfoData())
      this.router.navigate(['/education'])
    }

    get jobChoosen()
    {
      return this.jobs.filter((p)=>p.selected=true);
    }
}
