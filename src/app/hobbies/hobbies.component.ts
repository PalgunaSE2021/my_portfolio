import { Component, OnInit } from '@angular/core';
import { HobbyCardComponent } from '../hobby-card/hobby-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [HobbyCardComponent, CommonModule],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss',
})
export class HobbiesComponent implements OnInit {
  hobby1Content: string = 'Hobby 1';

  allHobbies: { content: string; header: string }[] = [];

  ngOnInit(): void {
    this.allHobbies = [
      {
        content: 'C1',
        header: 'Header of first hobby',
      },
      {
        content: 'C2',
        header: 'H2',
      },
      {
        content: 'C3',
        header: 'H3',
      },
      {
        content: 'C4',
        header: 'H4',
      },
    ];
  }
}
