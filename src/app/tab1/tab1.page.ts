import { Component } from '@angular/core';
import { PlatService } from '../service/plat.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public platService: PlatService) {}

  ngOnInit() {
    //Chargement de la syncronisation de listPlat et Firebase
    this.platService.loadPlat();
    //Cette fonction n'est appelé qu'au début. Ensuite listPlat sera tout le temps à jours
  }

  buttonAjouterPlat() {
    //Dans platService, on viens ajouter un nouveau plat
    //Toute la partie données est gérée dans les services
    this.platService.ajouterPlat("Nouveau Plat");
  }
}
