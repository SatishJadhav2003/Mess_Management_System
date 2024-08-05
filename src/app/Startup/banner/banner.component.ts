import { CommonModule } from '@angular/common';
import { Component, OnInit, WritableSignal, signal } from '@angular/core';
export interface Banner {
  image: string;
  title: string;
  message: string;
}
@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-banner',  
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  banners: WritableSignal<Banner[]> = signal([
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
  ]);

  translateX = signal(0);
  currentIndex = signal(0);

  ngOnInit() {
    this.startAutoScroll();
  }

  startAutoScroll() {
    setInterval(() => {
      this.nextBanner();
    }, 3000); // Change banner every 3 seconds
  }

  nextBanner() {
    this.currentIndex.set((this.currentIndex() + 1) % this.banners().length);
    this.translateX.set(-this.currentIndex() * 100);
  }
}
