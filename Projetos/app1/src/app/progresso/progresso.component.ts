import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {
  // componente progresso, possui uma variavel que aceita parametros 
  // externos definidos no momento da instancia do componente -> @Input() 
  @Input() public progresso: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
