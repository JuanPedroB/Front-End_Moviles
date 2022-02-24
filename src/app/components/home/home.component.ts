import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { MovilService } from 'src/app/services/movil.service';
import { IMovil } from 'src/app/Interface/IMovil';
import { Observable } from 'rxjs';
import { CustomResponse } from 'src/app/Interface/CustomResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  marca: string = "";
  movilActivo = -1;

  movilMarcado:boolean = false;
  movilSeleccionado!: IMovil;

  moviles$!: Observable<CustomResponse>;

  constructor(private movilService: MovilService, private route: Router) { }

  ngOnInit(): void {
    this.getMoviles();
  }
  
  getMoviles(){
    this.moviles$ = this.movilService.moviles$;
  }
  recogerMovil(item:IMovil){
    this.movilSeleccionado = item;
    this.movilService.getMovilSeleccionado(this.movilSeleccionado.marca);
  }
  cambiaEstado(pos: number) {
    if(this.movilActivo == pos){
      this.movilActivo = -1;
      this.movilMarcado = false;
    }else{
      this.movilMarcado = true;
      this.movilActivo = pos;
    }
  }

  verDatosMovil(){
    if(this.movilMarcado){
      this.route.navigate(["verMovil"]);       
    }else{
      alert("No hay un movil seleccionado");
    }
  }

  getMovilesByMarca(event: KeyboardEvent){
    if(this.marca != ""){
      this.moviles$ = this.movilService.getMarca(this.marca.toUpperCase());
    }else{
      this.getMoviles();
    }
  }

  anadirAComparar(){
    this.movilService.seleccionarMovilesComparados(this.movilSeleccionado.marca);
    alert("Movil añadido a la lista de comparación")
  }

  verComparacion(){
    if(this.movilService.hayDosMoviles){
      this.route.navigate(["verComparacion"]);
    }else{
      alert("No hay dos moviles para comparar");
    }
  }

}
