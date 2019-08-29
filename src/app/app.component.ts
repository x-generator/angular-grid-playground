import {Component} from '@angular/core';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {

    this.matIconRegistry.addSvgIcon("coffee_tea_shop",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/icon/hot-drinks.svg"
      ));

    this.matIconRegistry.addSvgIcon("under_construction",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/icon/construction.svg"
      ));
  }

  tiles: Tile[] = [
    {cols: 1, rows: 1, icon: "coffee_tea_shop", enabled: true, type: "Coffee and tea shop"},
    {cols: 1, rows: 1, icon: "under_construction", enabled: false, type: "Under construction"},
    {cols: 1, rows: 1, icon: "under_construction", enabled: false, type: "Under construction"},
    {cols: 1, rows: 1, icon: "under_construction", enabled: false, type: "Under construction"},
  ];
}

export interface Tile {
  cols: number;
  rows: number;
  icon: string;
  enabled: boolean;
  type: string;
}
