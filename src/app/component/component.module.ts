import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ItemPlatComponent } from "./item-plat/item-plat.component";

@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule],
    declarations: [ItemPlatComponent],//Ajout du component ItemPlat
    exports: [ItemPlatComponent]//Ajout du component ItemPlat
  })
export class ComponentModule {

}