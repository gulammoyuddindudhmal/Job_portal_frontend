import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  private newUser:User;
  private isloggedin:boolean;

  constructor(private http:HttpClient) {
    this.isloggedin=false;
    this.newUser={
      email:'',
      firstName:'',
      lastName:'',
      phone:'',
      resume:'',
      portfolioURL:'',
      roles:[],
      referrer:'',
      profilePhoto:'',
      sendUpdates:false,
      percentage:0,
      yop:'',
      qualification:'',
      stream:'',
      college:'',
      otherCollege:'',
      collegelocation:'',
      applicantType:true,
      yoe:0,
      currentCTC:'',
      expectedCTC:'',
      expertise:[],
      otherExp:'',
      familiar:[],
      otherFam:'',
      onNotice:false,
      haveAppeared:false,
      noticeDuration:0,
      noticeEnd:'',
      roleAppeared:''
    }
  }
  setDetails(
    firstName:string,
    lastname:string,
    photo:string,
    email:string,
    phone:string,
    resume:string,
    url:string,
    role:number[],
    ref:string,
    supd:boolean
  ){
    this.newUser.firstName=firstName;
    this.newUser.lastName=lastname;
    this.newUser.email=email;
    this.newUser.resume=resume;
    this.newUser.portfolioURL=url==''?null:url;
    this.newUser.roles=role;
    this.newUser.referrer=ref==''?null:ref;
    this.newUser.sendUpdates=supd;
    this.newUser.profilePhoto=photo==""?null:photo;
    this.newUser.phone=phone;
    console.log(this.newUser)
  }
  setEduQuals(
    perc:number,
    yop:string,
    qualification:string,
    stream:string,
    college:string,
    other:string,
    loc:string){
    this.newUser.percentage=perc;
    this.newUser.yop=yop;
    this.newUser.qualification=qualification;
    this.newUser.stream=stream;
    this.newUser.college=college;
    this.newUser.otherCollege=college=="other"?other:"-";
    this.newUser.collegelocation=loc;
    console.log(this.newUser)
  }
  setProQuals(
    applitype:boolean,
    yoe:number,
    currentCTC:string,
    expectedCTC:string,
    expertise:string[],
    otherExp:string,
    familiar:string[],
    otherFam:string,
    onNotice:boolean,
    noticeEnd:string,
    noticeDuration:number,
    haveAppeared:boolean,
    roleAppeared:string
  ){
    console.log(otherFam)
    this.newUser.applicantType=applitype;
    this.newUser.yoe=applitype?yoe:null;
    this.newUser.currentCTC=applitype?currentCTC:null;
    this.newUser.expectedCTC=applitype?expectedCTC:null;
    this.newUser.expertise=applitype?expertise:[];
    this.newUser.otherExp=applitype?otherExp:null;
    this.newUser.familiar=familiar;
    this.newUser.otherFam=otherFam;
    this.newUser.onNotice=applitype?onNotice:false;
    this.newUser.noticeDuration=onNotice?noticeDuration:null;
    this.newUser.noticeEnd=onNotice?noticeEnd:null;
    this.newUser.haveAppeared=haveAppeared;
    this.newUser.roleAppeared=haveAppeared?roleAppeared:null;
  }
  getNewUser(){
    return this.newUser
  }
  cancelNewUser(){
    this.newUser={
      email:'',
      firstName:'',
      lastName:'',
      phone:'',
      resume:'',
      portfolioURL:'',
      roles:[],
      referrer:'',
      profilePhoto:'',
      sendUpdates:false,
      percentage:0,
      yop:'',
      qualification:'',
      stream:'',
      college:'',
      otherCollege:'',
      collegelocation:'',
      applicantType:true,
      yoe:0,
      currentCTC:'',
      expectedCTC:'',
      expertise:[],
      otherExp:'',
      familiar:[],
      otherFam:'',
      onNotice:false,
      haveAppeared:false,
      noticeDuration:0,
      noticeEnd:'',
      roleAppeared:''
    }    
  }
  saveUser(){
    let nu=this.newUser;
    var x=nu.familiar.findIndex(t=>t=='Others');
    if(x!=-1){
      nu.familiar[x]=nu.otherFam??'';
    }
    x=nu.expertise.findIndex(t=>t=='Others');
    if(x!=-1){
      nu.expertise[x]=nu.otherExp??'';
    }
    return this.http.post<any>('http://localhost:5200/api/values',{
        "Email": nu.email==''?null:nu.email,
        "FirstName": nu.firstName==''?null:nu.firstName,
        "LastName": nu.lastName==''?null:nu.lastName,
        "Phone": nu.phone==''?null:nu.phone,
        "Portfolio": nu.portfolioURL==''?null:nu.portfolioURL,
        "Resume": nu.resume==''?null:nu.resume,
        "Photo": nu.profilePhoto==''?null:nu.profilePhoto,
        "Referrer": nu.referrer==''?null:nu.referrer,
        "SendUpdates": nu.sendUpdates,
        "Percentage": nu.percentage,
        "YearOfPassing": nu.yop==''?null:nu.yop,
        "Qualification": nu.qualification==''?null:nu.qualification,
        "Stream": nu.stream==''?null:nu.stream,
        "College": nu.college==''?null:nu.college=='other'?nu.otherCollege:nu.college,
        "College_loc": nu.collegelocation==''?null:nu.collegelocation,
        "IsExperienced": nu.applicantType,
        "YearOfExperience": nu.applicantType?nu.yoe:null,
        "CurrentCTC": nu.applicantType?nu.currentCTC?.toString():null,
        "ExpectedCTC": nu.applicantType?nu.expectedCTC?.toString():null,
        "OnNotice": nu.onNotice,
        "EndOfNotice": nu.onNotice?nu.noticeEnd:null,
        "PeriodOfNotice": nu.onNotice?nu.noticeDuration:null,
        "HaveAppeared": nu.haveAppeared,
        "RoleAppered": nu.roleAppeared,
        "Familiar": nu.familiar,
        "Expertise": nu.applicantType?nu.expertise:null,
        "Role_id": nu.roles
    });
  }
  logIn(email:string,password:string):Observable<string>{
    return this.http.post('http://localhost:5200/api/login',{
      "email":email,
      "password":password
    },{responseType:"text"})
  }
  isLoggedIn():boolean{
    var token = localStorage.getItem('access_token');
    if(token){
      return true;
    }else{
      return false;
    }
  }
}
