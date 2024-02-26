import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from '../services/userauth.service';
import { User } from '../interfaces/user';
import { WalkinService } from '../services/walkin.service';
import { Roles } from '../interfaces/roles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userreview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userreview.component.html',
  styleUrl: './userreview.component.scss'
})
export class UserreviewComponent {
  walkinservice:WalkinService=inject(WalkinService)
  userservice:UserauthService=inject(UserauthService)
  newUser:User;
  roles:Roles[]=[];
  constructor(private router:Router){
    this.newUser=this.userservice.getNewUser();
    this.walkinservice.getAllRoles().then((t)=>{
      this.roles=t;
    });
    
  }
  onClickPrev(){
    this.router.navigate(['/user/qualification'])
  }
  onClickCancel(){
    this.userservice.cancelNewUser();
    this.router.navigate(['/login'])
  }
  onEditPersonal(){
    this.router.navigate(['/user/personal'])
  }
  onClickCreate(){
    this.userservice.saveUser().subscribe(res=>{
      window.alert("User registration successful")
    },error=>{
      console.log(error);
      window.alert('Error:'+error);
    });
  }
  getRoleTitle(id:number){
    return this.roles.find(t=>t.id=id)?.title;
  }
}
