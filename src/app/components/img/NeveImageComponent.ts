import { Component, Input } from '@angular/core';

@Component({
  selector: 'neve-image',
  template: `
    <img 
      [src]="src" 
      [alt]="alt" 
      [style.width]="width" 
      [style.height]="height" 
      class="neve-img"
    />
  `,
  styles: [`
    .neve-img {
      display: block;
      max-width: 100%;
      height: auto;
      filter: grayscale(100%);
      transition: filter 0.5s ease;
    }
    .neve-img:hover{
      filter: grayscale(0%);
      cursor: pointer;
    }

    @media (max-width: 1020px) {
      .neve-img {
        width:100%;
        height:100%;
        object-fit:cover;
      }
    }
  `]
})
export class NeveImageComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() width?: string;
  @Input() height?: string;
}
