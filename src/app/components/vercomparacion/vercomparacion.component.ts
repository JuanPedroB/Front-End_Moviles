import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomResponse } from 'src/app/Interface/CustomResponse';
import { MovilService } from 'src/app/services/movil.service';

@Component({
  selector: 'app-vercomparacion',
  templateUrl: './vercomparacion.component.html',
  styleUrls: ['./vercomparacion.component.css']
})
export class VercomparacionComponent implements OnInit {

  constructor(private movilService: MovilService) { }

  movilesComparados$!: Observable<CustomResponse>;
  ngOnInit(): void {
    this.getMovilesComparar();
  }

  getMovilesComparar(){
    this.movilesComparados$ = this.movilService.getMovilesComparados();
  }
}
