import { Component, Input } from '@angular/core';

@Component({
  selector: 'neve-cross-link',
  template: `
    <div 
      role="button" 
      tabindex="0"
      (click)="handleClick()"
      (keydown.enter)="handleClick()"
      (keydown.space)="handleClick()"
      class="neve-cross-link"
      [class]="type"
    >
      <span class="crosslink-title">{{ primaryText }}</span>
      <div class="">
        <a class="crosslink-link"> {{ secondaryText }}</a>
      </div>
    </div>
  `,
  styleUrl: './NeveCrossLinkComponent.scss'
})
export class NeveCrossLinkComponent {
  @Input() primaryText: string = '';
  @Input() secondaryText: string = '';
  @Input() icon: string = '';
  @Input() type?: string | null = null;

  handleClick(): void {
    console.log('NeveCrossLink clicked!');
  }
}
