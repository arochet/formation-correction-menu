import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Plat } from "../model/plat";
import { PanierService } from "./panier.service";

@Injectable()
export class PlatService {
    //La liste des plats qui sera affichée
    listPlat: Plat[] = [];

    constructor(public afDB: AngularFireDatabase, public panierService: PanierService) {
    }

    loadPlat() {
        //Met à jour listPlat en fonction des changements dans Firebase
        this.afDB.list("Plat").snapshotChanges().subscribe(listPlatFirebase => {
            console.log("Il y a des modifications dans la table Plat");

            this.listPlat = [];//Evite la duplication de plat
            listPlatFirebase.forEach(unPlat => {
                //Crée une variable temporaire pour l'ajour de plat
                //On récupère la clé généré par Firebase pour l'assigné au plat
                let nouveauPlat: Plat = new Plat(unPlat.key,unPlat.payload.exportVal().titre);
                nouveauPlat.image = unPlat.payload.exportVal().image;

                //Ajoute un plat dans liste plat
                this.listPlat.push(nouveauPlat);
            });
        });
    }

    //Ajouter un nouveau plat en lui précisant son titre
    ajouterPlat(_titre: string) {
        let unPlat: Plat = new Plat("", _titre);//Création d'un plat pour l'ajout
        
        //Accès à Firebase pour ajouter dans la table "Plat" un nouvel élément
        this.afDB.list("Plat").push({
            titre: unPlat.titre,
            image: unPlat.image
        });
    }

    getListPanier() : Plat[] {
        //Créer une nouvelle liste pour les plats uniquement dans Panier
        let listPlatPanier = [];
        
        //Copie de la listPlat
        this.listPlat.forEach(plat => {
            if(this.panierService.listIdPlat.includes(plat.id)) {
                listPlatPanier.push(plat);
            }
        });

        return listPlatPanier;
    }
}