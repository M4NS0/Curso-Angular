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
            .then((resposta: any) => resposta)

    }
    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get<Oferta[]>(`http://localhost:3000/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta) => resposta)

    }

}

/* Codigo sem API, hardcode com arrays
export class OfertasService {
    constructor(private http: HttpClient) {

    }
    public ofertas: Array<Oferta> = [

        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                { url: "/assets/ofertas/1/img1.jpg" },
                { url: "/assets/ofertas/1/img2.jpg" },
                { url: "/assets/ofertas/1/img3.jpg" },
                { url: "/assets/ofertas/1/img4.jpg" }
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                { url: "/assets/ofertas/2/img1.jpg" },
                { url: "/assets/ofertas/2/img2.jpg" },
                { url: "/assets/ofertas/2/img3.jpg" },
                { url: "/assets/ofertas/2/img4.jpg" }
            ]

        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                { url: "/assets/ofertas/3/img1.jpg" },
                { url: "/assets/ofertas/3/img2.jpg" },
                { url: "/assets/ofertas/3/img3.jpg" },
                { url: "/assets/ofertas/3/img4.jpg" },
                { url: "/assets/ofertas/3/img5.jpg" },
                { url: "/assets/ofertas/3/img6.jpg" }
            ]
        }
    ]

    public getOfertas(): Array<Oferta> {
        return this.ofertas;
    }

    public getOfertas2(): Promise<Oferta[]> {
        return new Promise((resolve, reject) => {
            let deu_certo = true;
            if (deu_certo) {
                setTimeout(() => resolve(this.ofertas), 3000)
                resolve(this.ofertas) // passa pro then em home.compoenents
            } else {
                reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado xyz' });
            }
        })
            .then((ofertas: Oferta[]) => {
                // fazer tratativas
                console.log('primeiro then');
                return ofertas;
            })
            .then((ofertas: Oferta[]) => {
                // outra tratativa
                console.log('segundo then');
                return new Promise((resolve2, reject2) => {
                    setTimeout(() => { resolve2(ofertas)},3000)
                });
            })
            .then ((ofertas: Oferta[]) => {
                console.log('terceiro then executado apos 3s pois estava aguardando uma promessa ser resolvida');
                return this.ofertas;

            })
    }
    */