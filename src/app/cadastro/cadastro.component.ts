import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  ra: string;
  nome: string;
  email: string;
  cel: number;

  constructor() { }

  ngOnInit(): void {
  }

}
