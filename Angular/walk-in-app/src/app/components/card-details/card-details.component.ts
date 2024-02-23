import { Component,ElementRef,Renderer2,ViewChild ,OnInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { SpecJobPageService } from '../../services/spec-job-page.service';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss'
})
export class CardDetailsComponent implements OnInit{
    id:number;
    dp:boolean=true;
    termDisplay:boolean=false;
    jobData:any;
    jobRolesData:any;
    instructions:string[];
    instructionsForExam:string[];
    MinSystemRequirement:string[];
    processInfo:string[];
    timeSlot:any;
    jobPrefers:any;
    jobNames:any;

    @ViewChild('preReqTab') preReqTab:ElementRef;
    @ViewChild('dropDown') dropDown :ElementRef;


    form_data:any={
        timing:'',
        preferences:[],
        resume:''
    };
    checkBoxes:{
      name:string,
      selected:boolean,
      id:number
    }[]=[
      {name:"Instructional Designer",selected:false,id:1},
      {name:"Software Engineer",selected:false,id:2},
      {name:"Software Quality Engineer",selected:false,id:3}
    ];
    @ViewChild('mainTab') top:ElementRef;


    constructor(private router:Router,private render:Renderer2,private spec:SpecJobPageService,private route:ActivatedRoute){
    }


  ngOnInit(): void {


    this.id = parseInt(this.route.snapshot.paramMap.get('id'))-1;
    console.log("This is an id:"+this.id)

    this.spec.getJobCardData().subscribe(data=>{

      this.jobData = data;
      this.jobNames = this.jobData.result2[this.id+1];
      console.log(this.jobData)
      this.instructions = this.jobData.result1[this.id].generalInstruction.split('-').slice(1);
      this.instructionsForExam = this.jobData.result1[this.id].instructions.split('-').slice(1);
      this.MinSystemRequirement = this.jobData.result1[this.id].systemRequirement.split('-').slice(1);
      this.processInfo = this.jobData.result1[this.id].processInfo.split('.').slice(1);
      this.processInfo.pop();
  })
  this.spec.getformData().subscribe(data=>{
    this.timeSlot = data;
    console.log(this.timeSlot.result1)
    
  });
  

    // throw new Error('Method not implemented.');
  }

    showtermFunc()
    {
      console.log(this.termDisplay);
      if(this.termDisplay)
      {
        this.render.setStyle(this.dropDown.nativeElement,'transform','rotate(0deg)');
        this.render.setStyle(this.preReqTab.nativeElement,'display','none');
      }
      else{
        this.render.setStyle(this.dropDown.nativeElement,'transform','rotate(180deg)');
        this.render.setStyle(this.preReqTab.nativeElement,'display','block');
      }
      this.termDisplay = !this.termDisplay;
    }
    
    scrollTop()
    {   
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
   async  getData()
    {
      this.form_data.preferences = this.selectedData;
     await this.spec.getUserFormData({
          "email": sessionStorage.getItem('login'),
          "jobId": this.id+1,
          "timeSlotId":parseInt(this.form_data.timing),
          "resume": this.form_data.resume,
          "jobDetailId": this.selectedData
      }).subscribe(data=>{
        console.log(data);
      });
      console.log(this.form_data)
      console.log(this.id+1)
      this.router.navigate(['/hallTicket'])
    }
    get selectedData()
    {
      var selectedJobdata:number[]=[];
      for(let item in this.checkBoxes)
      {
          if(this.checkBoxes[item].selected)
          {
            selectedJobdata.push(this.checkBoxes[item].id);
          }
      }
      return selectedJobdata;
    }
}
