import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,Router } from '@angular/router';

import { Dropdown } from '../interfaces/dropdown';
import { Walkinjobs } from '../interfaces/walkinjobs';

import { WalkinService } from '../services/walkin.service';
import { ApplicationService } from '../services/application.service';
import { Walkins } from '../interfaces/Walkins';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-walkin-jobs',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './walkin-jobs.component.html',
  styleUrl: './walkin-jobs.component.scss'
})
export class WalkinJobsComponent {
  resume:string="";
  x:string="times";
  r:{
    id:number,
    value:string,
    isChk:boolean
  }[]=[];
  timeslot:number=0;
  applybtn:boolean;
  detail:Dropdown;
  roles:Dropdown[]=[];
  job:Walkinjobs | undefined;
  walkinservice:WalkinService=inject(WalkinService);
  route: ActivatedRoute= inject(ActivatedRoute);
  applicationservice:ApplicationService=inject(ApplicationService)
  walkinId=-1;
   constructor(private router:Router){
    this.detail={
      opened:false,
      display:"none",
      img:"../../assets/expand-down-svgrepo-com.svg"
    }
    this.walkinId=Number(this.route.snapshot.params['id']);
    console.log(this.walkinId)
    this.walkinservice.getWalkinJobsById(this.walkinId).subscribe(res=>{
      this.job=res;
      this.job.genIns=this.job.genIns.replace(/\n/g,'<br/>');
      this.job.examIns=this.job.examIns.replace(/\n/g,'<br/>');
      this.job.sysReq=this.job.sysReq.replace(/\n/g,'<br/>');
      this.job.process=this.job.process.replace(/\n/g,'<br/>');
      
      console.log(this.job)
      if(this.job){
        for(let i=0;i<this.job.roles.length;i++){
          this.job.roles[i].description=this.job.roles[i].description.replace(/\n/g,'<br/>');
          this.job.roles[i].requirements=this.job.roles[i].requirements.replace(/\n/g,'<br/>');
    
          this.roles.push({
            opened:false,
            display:"none",
            img:"../../assets/expand-down-svgrepo-com.svg"
          })
        }
      }
      this.r=this.job?.roles.map(t=>{
        let p:{
          id:number,
          value:string,
          isChk:boolean
        }={
          id:t.id,
          value:t.title,
          isChk:false
        }
        return p;
      })??[];
      this.timeslot=this.job.timeslots[0].id;
    });
    this.applybtn=this.r.length==0||this.r.filter(t=>t.isChk).length==0;
  };

  onSummaryClick():void{
    this.detail.opened=!this.detail.opened;
    this.detail.display=this.detail.opened?"block":"none";
    this.detail.img=this.detail.opened?"../../assets/expand_less_black_24dp.svg":"../../assets/expand-down-svgrepo-com.svg";
   // console.log(this.openDetail,this.displayDetail);
  }
  onRoleClick(event :Event):void{
    let elementId:number=Number((event.target as Element).id)
    this.roles[elementId].opened=!this.roles[elementId].opened
    this.roles[elementId].display=this.roles[elementId].opened?"block":"none";
    this.roles[elementId].img=this.roles[elementId].opened?"../../assets/expand_less_black_24dp.svg":"../../assets/expand-down-svgrepo-com.svg";
  }
  onChangeCheck(event : any){
    let id = Number((event.target as Element).getAttribute('value'));
    if(event.target.checked){
      this.r[this.r.findIndex(t=>t.id==id)].isChk=true;
    }else{
      this.r[this.r.findIndex(t=>t.id==id)].isChk=false;
    }
    this.applybtn=this.r.filter(t=>t.isChk).length==0;
  }
  onChangeRadio(event:any){
    let id =Number((event.target as Element).getAttribute('value'));
    if(event.target.checked){
      this.timeslot=id;
    }
  }
  onApply(){
    if(this.resume!=""){
      this.applicationservice.updateResume(this.resume).subscribe()
    }
    var id = 0;
   this.applicationservice.apply(
      this.walkinId,
      this.r.filter(t=>t.isChk).map(t=>t.id),
      this.timeslot
    ).subscribe(res=>{
      id=res
      window.alert("Application submitted successfully!!")
      this.router.navigate(['/walkin/application',id])
    },error=>{
      window.alert("Please try again")
    });
    
    
  }
}
