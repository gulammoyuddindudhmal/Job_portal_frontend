import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormArray,FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Dropdown } from '../interfaces/dropdown';

import { UserauthService } from '../services/userauth.service';
import { User } from '../interfaces/user';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-userqual',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './userqual.component.html',
  styleUrl: './userqual.component.scss'
})
export class UserqualComponent {
  edu:Dropdown;
  pro:Dropdown;
  dispExp:string;
  onNotice:boolean;
  haveAppeared:boolean;
  expertise:{
    id:string,
    value:string,
    isChk:boolean
  }[]=[
    {
      id:'e1',
      value:'Javascript',
      isChk:false
    },
    {
      id:'e2',
      value:'Angular JS',
      isChk:false
    },
    {
      id:'e3',
      value:'React',
      isChk:false
    },
    {
      id:'e4',
      value:'Node JS',
      isChk:false
    },{
      id:'e5',
      value:'Others',
      isChk:false
    },
  ]
  familiar:{
    id:string,
    value:string,
    isChk:boolean
  }[]=[
    {
      id:'f1',
      value:'Javascript',
      isChk:false
    },{
      id:'f2',
      value:'Angular JS',
      isChk:false
    },{
      id:'f3',
      value:'React',
      isChk:false
    },{
      id:'f4',
      value:'Node JS',
      isChk:false
    },{
      id:'f5',
      value:'Others',
      isChk:false
    }
  ]
  eduQ:FormGroup;
  proQ:FormGroup;
  newUser:User;
  userservice:UserauthService=inject(UserauthService)
  constructor(private router:Router){
    this.newUser=this.userservice.getNewUser();
    this.edu={
      opened:false,
      display:"none",
      img:"../../assets/expand-down-svgrepo-com.svg"
    }
    this.pro={
      opened:false,
      display:"none",
      img:"../../assets/expand-down-svgrepo-com.svg"
    }
    this.onNotice=this.newUser.onNotice;
    this.haveAppeared=this.newUser.haveAppeared;
    this.eduQ=new FormGroup({
      percentage:new FormControl(this.newUser.percentage,Validators.required),
      yop:new FormControl(this.newUser.yop,Validators.required),
      qaulification:new FormControl(this.newUser.qualification,Validators.required),
      stream:new FormControl(this.newUser.stream,Validators.required),
      college:new FormControl(this.newUser.college,Validators.required),
      others:new FormControl(this.newUser.otherCollege),
      location:new FormControl(this.newUser.collegelocation,Validators.required),
    })
    this.proQ=new FormGroup({
      yoe:new FormControl(this.newUser.yoe,Validators.required),
      currentCTC:new FormControl(this.newUser.currentCTC,Validators.required),
      expectedCTC:new FormControl(this.newUser.expectedCTC,Validators.required),
      noticeEnd:new FormControl(this.newUser.noticeEnd),
      noticeDuration:new FormControl(this.newUser.noticeDuration),
      roleAppeared:new FormControl(this.newUser.roleAppeared),
      othersExp:new FormControl(this.newUser.otherExp),
      othersFam:new FormControl(this.newUser.otherFam)
    })
    this.dispExp=this.newUser.applicantType?'block':'none';
    this.newUser.expertise?.forEach(t=>{
      let i=this.expertise.findIndex(d=>d.value==t);
      this.expertise[i].isChk=true;
    })
    this.newUser.familiar?.forEach(t=>{
      let i=this.familiar.findIndex(d=>d.value==t);
      this.familiar[i].isChk=true;
    })
  }
  onClickNext(){
    this.userservice.setEduQuals(
      this.eduQ.value.percentage??0,
      this.eduQ.value.yop??'',
      this.eduQ.value.qaulification??'',
      this.eduQ.value.stream??'',
      this.eduQ.value.college??'',
      this.eduQ.value.others??'',
      this.eduQ.value.location??'',
    )
    this.userservice.setProQuals(
      this.dispExp=="none"?false:true,
      this.proQ.value.yoe??0,
      this.proQ.value.currentCTC??'',
      this.proQ.value.expectedCTC??'',
      this.expertise.filter(t=>t.isChk).map(t=>t.value),
      this.proQ.value.othersExp??'',
      this.familiar.filter(t=>t.isChk).map(t=>t.value),
      this.proQ.value.othersFam??'',
      this.onNotice,
      this.proQ.value.noticeEnd??'',
      parseInt(this.proQ.value.noticeDuration)??0,
      this.haveAppeared,
      this.proQ.value.roleAppeared??'',
    )
    this.router.navigate(['/user/review'])
  }
  
  onClickPrev(){
    this.router.navigate(['/user/personal'])
  }
  onClickCancel(){
    this.userservice.cancelNewUser();
    this.router.navigate(['/login'])
  }
  onClickEdu(){
    this.edu.opened=!this.edu.opened;
    this.edu.img=this.edu.opened?"../../assets/expand_less_black_24dp.svg":"../../assets/expand-down-svgrepo-com.svg";
    this.edu.display=this.edu.opened?"flex":"none";
  }
  onClickPro(){
    this.pro.opened=!this.pro.opened;
    this.pro.img=this.pro.opened?"../../assets/expand_less_black_24dp.svg":"../../assets/expand-down-svgrepo-com.svg";
    this.pro.display=this.pro.opened?"flex":"none";
  }
  onChangeApplitype(event : Event){
    let id:string=(event.target as Element).id;
    let field1=this.proQ.controls['yoe'],field2=this.proQ.controls['currentCTC'],field3=this.proQ.controls['expectedCTC'];
    if(id=="fresher"){
      this.dispExp="none";
      field1.removeValidators(Validators.required);
      field2.removeValidators(Validators.required);
      field3.removeValidators(Validators.required);
    }else{
      this.dispExp="block";
      field1.addValidators(Validators.required);
      field2.addValidators(Validators.required);
      field3.addValidators(Validators.required);
    }
    field1.updateValueAndValidity();
    field2.updateValueAndValidity();
    field3.updateValueAndValidity();
  }
  onChangeOnNotice(e:Event){
    let ctrl=(e.target as Element).getAttribute('value');
    console.log(ctrl)
    let field1=this.proQ.controls['noticeEnd']
    let field2=this.proQ.controls['noticeDuration'];
    
    if(ctrl=="true"){
      this.onNotice=true;
      field1.addValidators(Validators.required);
      field2.addValidators(Validators.required);
    }else{
    this.onNotice=false;
      field1.removeValidators(Validators.required);
      field2.removeValidators(Validators.required);
    }
    field1.updateValueAndValidity();
    field2.updateValueAndValidity();
  }
  onChangehaveAppeared(event : Event){
    let ctrl=(event.target as Element).getAttribute('value');
    if(ctrl=="true"){
      this.haveAppeared=true;
    }else{
      this.haveAppeared=false;
    }
  }
  onChangeCheck(event:any){
    let ctrl=(event.target as Element)
    if(event.target.checked){
      if(ctrl.id[0]=="e"){
        let i=this.expertise.findIndex(t=>t.id==ctrl.id);
        this.expertise[i].isChk=true;
      }else{
        let i=this.familiar.findIndex(t=>t.id==ctrl.id);
        this.familiar[i].isChk=true;
      }
      if(ctrl.id=="e5"){
        this.proQ.controls['othersExp'].addValidators(Validators.required);
      }
      if(ctrl.id=="f5"){
        this.proQ.controls['othersFam'].addValidators(Validators.required);
      }
    }else{
      if(ctrl.id[0]=="e"){
        let i=this.expertise.findIndex(t=>t.id==ctrl.id);
        this.expertise[i].isChk=false;
      }else{
        let i=this.familiar.findIndex(t=>t.id==ctrl.id);
        this.familiar[i].isChk=false;
      }
      if(ctrl.id=="e5"){
        this.proQ.controls['othersExp'].removeValidators(Validators.required);
      }
      if(ctrl.id=="f5"){
        this.proQ.controls['othersFam'].removeValidators(Validators.required);
      }
    }
    this.proQ.controls['othersExp'].updateValueAndValidity();
    this.proQ.controls['othersFam'].updateValueAndValidity();
  }
  onChangeCollege(){
    let val=this.eduQ.value.college;
    if(val=='other'){
      this.eduQ.controls['others'].addValidators(Validators.required)
    }else{
      this.eduQ.controls['others'].removeValidators(Validators.required)
    }
    this.eduQ.controls['others'].updateValueAndValidity();

  }
}
