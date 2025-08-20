import { Component, Input } from '@angular/core';

@Component({
  selector: 'neve-button',
  template: `
    <button
        [class]="type"
        (click)="navigate()"
        [attr.aria-label]="label"
        type="button"
    >
        {{ label }}
    </button>
  `,
  styleUrls: ['./NeveButtonComponent.scss']
})
export class NeveButtonComponent {
  @Input() label: string = '';
  @Input() type: string = 'primary';
  @Input() link: string = '';

  navigate() {
    if (this.link) {
      window.location.href = this.link;
    }
  }
}
