import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Plat } from "../model/plat";

@Injectable()
export class PlatService {
    //La liste des plats qui sera affichée
    listPlat: Plat[] = [];

    constructor(public afDB: AngularFireDatabase) {
    }

    loadPlat() {
        //Met à jour listPlat en fonction des changements dans Firebase
        this.afDB.list("Plat").snapshotChanges().subscribe(listPlatFirebase => {
            console.log("Il y a des modifications dans la table Plat");

            this.listPlat = [];//Evite la duplication de plat
            listPlatFirebase.forEach(unPlat => {
                //Crée une variable temporaire pour l'ajour de plat
                let nouveauPlat: Plat = new Plat(unPlat.payload.exportVal().titre);
                nouveauPlat.image = unPlat.payload.exportVal().image;

                //Ajoute un plat
                this.listPlat.push(nouveauPlat);
            });
        });
    }

    //Ajouter un nouveau plat en lui précisant son titre
    ajouterPlat(_titre: string) {
        let unPlat: Plat = new Plat(_titre);//Création d'un plat pour l'ajout
        
        //Accès à Firebase pour ajouter dans la table "Plat" un nouvel élément
        this.afDB.list("Plat").push({
            titre: unPlat.titre,
            image: unPlat.image
        });
    }
}