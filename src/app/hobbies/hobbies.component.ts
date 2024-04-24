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
        content:
          'I love tinkering with web development in my spare time, building websites and learning new skills along the way. I enjoy exploring various frontend libraries to expand my toolkit and discover new ways to enhance user experiences.',
        header: 'Web development',
      },
      {
        content: 'My favorite pastime, my passion, my escape.',
        header: 'Badminton',
      },
      {
        content: 'I love diving into the water and feeling free.',
        header: 'Swimming',
      },
      {
        content:
          ' I enjoy experimenting with flavors and creating delicious meals.',
        header: 'Cooking',
      },
    ];
  }
}
