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

  ngOnInit(): void {
    
  }
}
