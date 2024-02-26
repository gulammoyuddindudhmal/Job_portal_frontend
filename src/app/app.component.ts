import { Component } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { WalkinComponent } from './walkin/walkin.component';
import { LoginComponent } from './login/login.component';
import { UserauthService } from './services/userauth.service';
import { WalkinService } from './services/walkin.service';
import { JwtINterceptor } from './auth/MyIntercepter';
import { ApplicationService } from './services/application.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,RouterOutlet,WalkinComponent,LoginComponent],
  providers:[{
    provide:HTTP_INTERCEPTORS,
    useClass:JwtINterceptor,
    multi:true
  },HttpClientModule,UserauthService,WalkinService,ApplicationService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'job_portal';
  
}
