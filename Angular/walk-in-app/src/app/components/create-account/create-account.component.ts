import { Component,Input } from '@angular/core';
import { EducationPageDataService} from '../../services/education-page-data.service';
import { SharedServiceService } from '../../services/shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
   @Input() show:string;
   @Input() id:boolean;
   @Input() back:string;
   @Input() personalInfo :any;
   @Input() EducationInfo:any;
   @Input() fresherInfo:any;
   @Input() ExperienceInfo:any;
   present:string = "Not Present";
   constructor(private router:Router,private education:EducationPageDataService,private shared:SharedServiceService){}
   getData()
   {
     console.log(this.id);
   }
   cancelProcess(){
      this.router.navigate(['/']);
   }
   
  async submitForm()
   {

      console.log(this.fresherInfo);
     
    
      this.education.sendProfileData(this.fresherInfo).subscribe(
        data=>{
          console.log(data)
        });
  
      this.router.navigate(['/']);
       
      
   }
}
