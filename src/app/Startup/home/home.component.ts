import { Component, WritableSignal, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { BannerComponent } from '../banner/banner.component';
import { HeaderComponent } from "../header/header.component";
export interface Services {
  ID: number;
  Title: string;
  Image: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, BannerComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  services:WritableSignal<Services[]> =signal([
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
  ]);
}
