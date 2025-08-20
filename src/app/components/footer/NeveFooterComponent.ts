import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NeveNavigationFooter } from '../navigation-footer/NeveNavigationFooter';
import { Footer, NeveMenuItem } from '../models/models';

@Component({
  selector: 'neve-footer',
  imports: [CommonModule, NeveNavigationFooter],
  styleUrl: './NeveFooterComponent.scss',
  templateUrl: './NeveFooterComponent.html',
  styles: [`
    .nave-footer {
      background-color: black;
      color: white;
      text-align: center;
      padding: 1rem;
    }
  `]
})
export class NeveFooterComponent {

  @Input() config: Footer = {
    newsletter: {
      label: '',
      cta: '',
      url: ''
    },
    menus: {
      primary: [],
      meetingFestival: {
        label: '',
        items: []
      },
      info: {
        label: '',
        items: []
      },
      legal: {
        label: '',
        items: []
      }
    }
  };
  links: NeveMenuItem[] = [];

  get newsletter(){
    return this.config.newsletter
  }
  get menus() {
    return this.config.menus
  }
  get partnersLogo(){
    return this.config.partnersLogo ? this.config.partnersLogo : { label: 'By', url: ''};
  }
}
