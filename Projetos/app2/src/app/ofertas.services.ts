import { Oferta } from "./shared/oferta.model";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

//import 'rxjs/add/operator/toPromise'


@Injectable()
export class OfertasService {
    constructor(private http: HttpClient) {

    }

    public getOfertas(): Promise<Oferta[]> {
        // efetuar requisicao http
        // retornar uma promisse Oferta[]
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then((resposta: any) =>resposta.json())

    }
    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get<Oferta[]>(`http://localhost:3000/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta) =>resposta)

    }
    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`http://localhost:3000/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: any) =>resposta.json())
    }

}
