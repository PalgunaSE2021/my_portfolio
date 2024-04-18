import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  scrollToElement(component: string) {
    switch (component) {
      case 'profile':
        const profileElement = document.getElementById('profileComponent');
        console.log('element:', profileElement);
        if (profileElement) {
          profileElement.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'hobbies':
        const hobbiesElement = document.getElementById('hobbiesComponent');
        console.log('element:', hobbiesElement);
        if (hobbiesElement) {
          hobbiesElement.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'contact':
        const contactElement = document.getElementById('contactComponent');
        console.log('element:', contactElement);
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
        break;
    }
  }

  ngOnInit(): void {}
}
