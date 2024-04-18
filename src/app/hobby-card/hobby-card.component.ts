import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hobby-card',
  standalone: true,
  imports: [],
  templateUrl: './hobby-card.component.html',
  styleUrl: './hobby-card.component.scss',
})
export class HobbyCardComponent {
  @Input() header?: string;
  @Input() content?: string;

  constructor() {}
}
