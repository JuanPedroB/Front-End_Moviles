import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomResponse } from 'src/app/Interface/CustomResponse';
import { IMovil } from 'src/app/Interface/IMovil';
import { MovilService } from 'src/app/services/movil.service';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';

@Component({
  selector: 'app-ver-datos',
  templateUrl: './ver-datos.component.html',
  styleUrls: ['./ver-datos.component.css']
})
export class VerDatosComponent implements OnInit {

  constructor(private route:ActivatedRoute, private movilService: MovilService,private userAuthenticationService:UserAuthenticationService) { }

  movilElegido$!: Observable<CustomResponse>;
  movil!: IMovil;
  ngOnInit(): void {
    this.getMovil();
    //this.route.params.subscribe(params => this.movil = <IMovil> params);
  }

  getMovil(){
    if(this.userAuthenticationService.accessGranted){
      this.movilElegido$ =  this.movilService.verMovilElegido$;
    }
  
  }

}
