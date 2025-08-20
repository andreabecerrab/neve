import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'neve-card',
  imports: [CommonModule],
  styleUrl: "./NeveCardComponent.scss",
  template: `
    <div
      role="link"
      tabindex="0"
      (click)="navigate()"
      (keydown.enter)="navigate()"
      (keydown.space)="navigate()"
      class="neve-card"
    >
      <figure>
        <img [src]="img" alt="Card image" />
      </figure>
      <span class="card-date">{{ date }}</span>
      <div *ngIf="categories.length > 0" class="card-categories">
        <span *ngFor="let category of categories" class="card-category">{{ category }}</span>
      </div>

      <p class="card-desc">{{ description }}</p>
    </div>
  `
})
export class NeveCardComponent {
  @Input() img!: string;
  @Input() date!: string;
  @Input() categories: string[] = [];
  @Input() description!: string;
  @Input() link!: string;

  constructor(private router: Router) {}

  navigate() {
    if (this.link) {
      this.router.navigate([this.link]);
    }
  }
}
