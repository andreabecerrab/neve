// header-neve.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Header, NeveMenuItem } from '../models/models';

@Component({
  selector: 'neve-header',
  templateUrl: './NeveHeaderComponent.html',
  styleUrls: ['./NeveHeaderComponent.scss']
})
export class NeveHeaderComponent implements OnInit{
  @Input() menuItems: NeveMenuItem[] = [];
  @Input() config: Header = {
    cta: {
      label: '',
      url: ''
    },
    logo: {
      ariaLabel: '',
      svgUrl: ''
    }
  };
  menuOpen = false;
  menuTxt: string = 'Menu';


  ngOnInit(): void {
    
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.menuTxt =  this.menuOpen ? 'Close Menu': 'Menu';

    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.menuOpen = false;
    this.menuTxt = 'Menu';
    document.body.style.overflow = '';
  }
}
