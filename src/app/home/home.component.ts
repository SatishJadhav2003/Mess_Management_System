import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { BannerComponent } from "../banner/banner.component";
export interface Services {
  ID: number;
  Title: string;
  Image: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  services: Services[] = [
    {
      ID: 3,
      Title: 'Day Special',
      Image: 'images/dayspecial.jpg',
    },
    {
      ID: 1,
      Title: 'Monthly Tiffin',
      Image: 'images/tiffin.jpg',
    },
    {
      ID: 2,
      Title: 'Parcel Point',
      Image: 'images/parcel.webp',
    },
    
  ];
}
