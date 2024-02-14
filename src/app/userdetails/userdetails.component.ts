import { Component,inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserauthService } from '../services/userauth.service';
import { WalkinService } from '../services/walkin.service';
import { User } from '../interfaces/user';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.scss'
})
export class UserdetailsComponent {
  r:{
    id:number,
    value:string,
    isChk:boolean
  }[]=[];
  details:FormGroup;
  userService:UserauthService=inject(UserauthService);
  walkinservice:WalkinService=inject(WalkinService);
  newUser:User;
  sendUpd:boolean;
  constructor(private router:Router){
    this.newUser=this.userService.getNewUser();
    this.r=this.walkinservice.getAllRoles().map(t=>{
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
    })
    this.newUser.roles.forEach(t=>{
    this.r[this.r.findIndex(d=>d.id==t)].isChk=true;
    })
    console.log(this.r)
    this.details=new FormGroup({
      firstName:new FormControl(this.newUser.firstName,Validators.required),
      lastName:new FormControl(this.newUser.lastName,Validators.required),
      email:new FormControl(this.newUser.email,[Validators.required,Validators.email]),
      phone:new FormControl(this.newUser.phone,[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]),
      resume:new FormControl(''),
      portfolioURL:new FormControl(this.newUser.portfolioURL),
      referrer:new FormControl(this.newUser.referrer),
      profilePhoto:new FormControl(this.newUser.profilePhoto)
    })
    this.sendUpd=this.newUser.sendUpdates;
  }
  onClickNext(){
    this.userService.setDetails(
      this.details.value.firstName ?? '',
      this.details.value.lastName ?? '',
      this.details.value.profilePhoto?? '',
      this.details.value.email ?? '',
      this.details.value.phone ?? '',
      this.details.value.resume ?? '',
      this.details.value.portfolioURL ?? '',
      this.r.filter(t=>t.isChk).map(t=>t.id),
      this.details.value.referrer ?? '',
      this.sendUpd??false
    )
    this.router.navigate(['/user/qualification'])
  }
  
  onClickCancel(){
    this.userService.cancelNewUser();
    this.router.navigate(['/login'])
  }
  or():boolean{
    return this.r.filter(t=>t.isChk).length!=0;
  }
  onChangeCheck(event:any){
    let id = (event.target as Element).id;
    if(event.target.checked){
      if (id=='sendUpdates'){
        this.sendUpd=true;
      }else{
        this.r[this.r.findIndex(t=>t.id.toString()==id)].isChk=true;
      }
    }else{
      if (id=='sendUpdates'){
        this.sendUpd=false;
      }else{
        this.r[this.r.findIndex(t=>t.id.toString()==id)].isChk=false;
      }
    }
  }
}


