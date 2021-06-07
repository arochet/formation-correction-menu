import { Component, Input, OnInit } from '@angular/core';
import { Plat } from 'src/app/model/plat';
import { PanierService } from 'src/app/service/panier.service';

@Component({
  selector: 'app-item-plat',
  templateUrl: './item-plat.component.html',
  styleUrls: ['./item-plat.component.scss'],
})
export class ItemPlatComponent implements OnInit {

  @Input() plat: Plat;//Saisir cette variable dans <app-item-plat [plat]="plat">
  @Input() canAjoutPanier: boolean = false;

  constructor(public panierService: PanierService) { }

  ngOnInit() {}

  buttonAjoutPanier() {
    this.panierService.ajoutPlat(this.plat.id);
  }
}
