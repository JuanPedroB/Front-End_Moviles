import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomResponse } from 'src/app/Interface/CustomResponse';
import { MovilService } from 'src/app/services/movil.service';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';

@Component({
  selector: 'app-vercomparacion',
  templateUrl: './vercomparacion.component.html',
  styleUrls: ['./vercomparacion.component.css']
})
export class VercomparacionComponent implements OnInit {

  constructor(private movilService: MovilService,private userAuthenticationService:UserAuthenticationService) { }

  movilesComparados$!: Observable<CustomResponse>;
  ngOnInit(): void {
    this.getMovilesComparar();
  }

  getMovilesComparar(){
    if(this.userAuthenticationService.accessGranted){
      this.movilesComparados$ = this.movilService.getMovilesComparados(this.userAuthenticationService.accessToken);
    }
  
  }
}
