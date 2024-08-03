import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone:true,
  imports:[CommonModule],
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banners = [
    { image: 'images/plat1.png', title: "Missing MOM's meal ?", message: 'Give us chance' },
    { image: 'https://via.placeholder.com/600x400', title: 'Banner 2', message: 'This is the second banner message.' },
    { image: 'https://via.placeholder.com/600x400', title: 'Banner 3', message: 'This is the third banner message.' }
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
