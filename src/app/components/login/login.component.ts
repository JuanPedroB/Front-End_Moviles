import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string="";
  password:string="";
  autenticado:boolean=false;

  constructor(private userAuthenticationService:UserAuthenticationService, private route: Router) { }

  ngOnInit(): void {
  }

  autenticar(username:string, password:string){
    this.userAuthenticationService.authenticate(username,password);
    setTimeout(() => this.accesogranted(),215)
    
  }
  accesogranted(){
    if(this.userAuthenticationService.accessGranted){
      this.pasarAVerDatos();
    }
  }

  pasarAVerDatos(){
    this.route.navigate(["home"]);
  }
}
