import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-plat',
  templateUrl: './item-plat.component.html',
  styleUrls: ['./item-plat.component.scss'],
})
export class ItemPlatComponent implements OnInit {

  @Input() titre: string = "";//Saisir cette variable dans <app-item-plat titre="Hamburger">
  @Input() image: string = "";
  @Input() canAjoutPanier: boolean = false;

  constructor() { }

  ngOnInit() {}

}
