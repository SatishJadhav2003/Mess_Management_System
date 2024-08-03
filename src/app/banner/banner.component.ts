import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  banners = [
    {
      image: 'images/plat2.jpg',
      title: 'Are you hungry ?',
      message: "Let's try delicious day special",
    },
    {
      image: 'images/plat1.png',
      title: "Missing MOM's meal ?",
      message: 'Give us chance',
    },
    {
      image: 'images/tiffin2.png',
      title: 'Need a Tiffin ?',
      message: 'For college, Office or whatever,Will provide.',
    },
  ];

  translateX = 0;
  currentIndex = 0;

  ngOnInit() {
    this.startAutoScroll();
  }

  startAutoScroll() {
    setInterval(() => {
      this.nextBanner();
    }, 3000); // Change banner every 3 seconds
  }

  nextBanner() {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
    this.translateX = -this.currentIndex * 100;
  }
}
