import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  // @Input() title: string = '';
  // @Input() image: string = '';
  // @Input() id: number;
  title = input.required();
  image = input.required();
  id = input.required();
}
