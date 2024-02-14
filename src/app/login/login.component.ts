import { Component, inject } from '@angular/core';
import { Router} from '@angular/router';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { UserauthService } from '../services/userauth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  creds=new FormGroup({
    email: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    remember:new FormControl(false)
  })
  togglePass:boolean;
  typePass:string;
  userservice:UserauthService=inject(UserauthService)
  constructor(private router:Router){
    this.togglePass=false;
    this.typePass="password";
  }
  onClickPreview(){
    this.togglePass=!this.togglePass;
    this.typePass=this.togglePass?"text":"password";
  }
  onClickNext(){
    this.router.navigate(['/user/personal'])
  }
  onSubmit(){
    if(this.userservice.logIn(this.creds.value.email??'',this.creds.value.password??'')){
      window.alert('logged in successfully!')
      this.router.navigate(['/'])
    }else{
      window.alert('Invalid Credentials')
    }    
  }
}

