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
  roles:Roles[];
  constructor(private router:Router){
    this.newUser=this.userservice.getNewUser();
    this.roles=this.walkinservice.getAllRoles();
    console.log(typeof(this.newUser.onNotice));
    
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
    if(this.userservice.saveUser()){
      window.alert('Registration Successful')
      this.router.navigate(['/login'])
    }else{
      window.alert('Some details are missing!!.\nPlease fill it out')
    }
  }
}
