import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomResponse } from '../Interface/CustomResponse';
import { IMovil } from '../Interface/IMovil';

@Injectable({
  providedIn: 'root'
})
export class MovilService {

  private readonly apiUrl = 'http://localhost:8080';
  constructor(protected http: HttpClient) { }
movilCompUno:string = "";
movilCompDos:string ="";

//movilesMarca$:any;

//moviles$ = <Observable<CustomResponse>>this.http.get<CustomResponse>(this.apiUrl+"/moviles/homeDos");
verMovilElegido$:any;

hayDosMoviles:boolean = false;

getMarca(marc: string,access_token:string){
  let options = this.option(access_token);
  return this.http.get<CustomResponse>(this.apiUrl+"/moviles/marca/"+marc+"", options);
}

getMovilSeleccionado(marcaSeleccionada: string,access_token:string){
  let options = this.option(access_token);
  this.verMovilElegido$= <Observable<CustomResponse>>this.http.get<CustomResponse>(this.apiUrl+"/moviles/marca/"+marcaSeleccionada+"", options);
}

getMovilesComparados(access_token:string){
  let options = this.option(access_token);
    return <Observable<CustomResponse>>this.http.get<CustomResponse>(this.apiUrl+"/moviles/"+this.movilCompUno+"/"+this.movilCompDos+"", options);
}

seleccionarMovilesComparados(marca:string){
  if(this.movilCompDos != ""){
    this.hayDosMoviles = false;
    this.movilCompUno ="";
    this.movilCompDos="";
  }
  if(this.movilCompUno == ""){
    this.movilCompUno = marca;
  }else{
    this.movilCompDos = marca;
    this.hayDosMoviles = true;
  }
  
}

public moviles$(access_token:string):Observable<CustomResponse>{
  let options = this.option(access_token)
  return this.http.get<CustomResponse>(this.apiUrl + '/moviles/homeDos',options);
}



public option(access_token:string){
  let options = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer' + ' ' + access_token,
    }),
    withCredentials: true,
  };
  return options;
}

}
