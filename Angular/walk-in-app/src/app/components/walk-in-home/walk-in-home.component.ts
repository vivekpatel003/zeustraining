import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpecJobPageService } from '../../services/spec-job-page.service';

@Component({
  selector: 'app-walk-in-home',
  templateUrl: './walk-in-home.component.html',
  styleUrl: './walk-in-home.component.scss'
})
export class WalkInHomeComponent implements OnInit {
  dp:boolean=true;
  jobData:any;
  
  constructor(private router:Router,private spec:SpecJobPageService){ }
  ngOnInit(): void {
    this.spec.getJobCardData().subscribe(data=>{
      this.jobData = data;
      console.log(this.jobData);   
  }) 
    throw new Error('Method not implemented.');
  }
  expandData(id:number)
  {
      this.router.navigate(['/cardDetail',id]);

    }
}
