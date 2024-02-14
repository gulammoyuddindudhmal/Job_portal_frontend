import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,Router } from '@angular/router';

import { Dropdown } from '../interfaces/dropdown';
import { Walkinjobs } from '../interfaces/walkinjobs';

import { WalkinService } from '../services/walkin.service';
import { ApplicationService } from '../services/application.service';
@Component({
  selector: 'app-walkin-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './walkin-jobs.component.html',
  styleUrl: './walkin-jobs.component.scss'
})
export class WalkinJobsComponent {
  x:string="times";
  r:{
    id:number,
    value:string,
    isChk:boolean
  }[];
  timeslot:number;
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
    this.job=this.walkinservice.getWalkinJobsById(this.walkinId);
    if(this.job){
      for(let i=0;i<this.job.roles.length;i++){
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
    this.timeslot=0;
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
    let id = this.applicationservice.apply(
      this.walkinId,
      this.r.filter(t=>t.isChk).map(t=>t.id),
      this.timeslot
    );
    if(id!=-1){
      window.alert("Application submitted successfully!!")
      this.router.navigate(['/walkin/application',id])
    }else{
      window.alert("Please try again")
    }
  }
}
