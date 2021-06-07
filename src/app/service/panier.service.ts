import { Injectable } from "@angular/core";

@Injectable()
export class PanierService {
    //Liste identifiant des plats qui ont été ajouté au panier
    listIdPlat: string[] = [];

    ajoutPlat(identifiant: string) {
        this.listIdPlat.push(identifiant);
    }
}