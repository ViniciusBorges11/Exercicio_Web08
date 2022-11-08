import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent implements OnInit {

  nome: string;
  sexo: string;
  valor: number;
  idade: number;
  resultado: number;
  valora: number;


  constructor() { }

  ngOnInit(): void {
  }

  Apolice(){
    if (this.sexo == 'f'){
      this.resultado = (this.valor * 0.08 );
    }
    if (this.sexo == 'm'){
      this.resultado = (this.valor * 0.15 );
    }
    if (this.sexo == 'm' && this.idade >= 25){
      this.resultado = (this.valor * 0.10 );
    }
    
  }

}
