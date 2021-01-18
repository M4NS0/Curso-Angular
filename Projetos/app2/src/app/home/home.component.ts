import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {
  public ofertas: Oferta[];
  constructor(private ofertasServce: OfertasService) { }

  ngOnInit(): void {
    // this.ofertas = this.ofertasServce.getOfertas();
    // console.log(this.ofertas);

    this.ofertasServce.getOfertas() // recebe do resolve da promisse
      .then(
        (ofertas: Oferta[]) => {
          // console.log('função resolvida depois de 3 s') 
          this.ofertas = ofertas;
        }
        //(param: any) => { console.log(param) } vvvv
      )
      .catch((param: any) => { console.log(param) })
  }
}
