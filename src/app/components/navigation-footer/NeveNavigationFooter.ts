import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FooterLink } from '../models/models';


@Component({
  selector: 'neve-navigation-footer',
  imports: [CommonModule],
  standalone: true,
  styleUrl: './NeveNavigationFooter.scss',
  template: `
    <div class="footer-nav-container">
      <span *ngIf=label class="nav-label"> {{ label }}</span>
      <nav [attr.aria-label]="ariaLabel || 'Footer navigation'">
        <ul *ngIf="links.length > 0" class="footer-links">
          <li *ngFor="let link of links; trackBy: trackByHref">
            <a
              [href]="link.url"
              [attr.aria-label]="link.ariaLabel || link.label"
              [attr.aria-current]="isCurrent(link.url) ? 'page' : null"
              class="link-parent"

            >
              {{ link.label }}
            </a>
            <ul *ngIf="link.children" class="footer-secondary-links">
              <li *ngFor="let linkC of link.children; trackBy: trackByHref">
                <a
                  [href]="linkC.url"
                  [attr.aria-label]="linkC.ariaLabel || linkC.label "
                  [attr.aria-current]="isCurrent(linkC.url) ? 'page' : null"
                  class="link-child"
                >
                  {{ linkC.label }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  `,
})
export class NeveNavigationFooter implements OnInit{
  /** Links to render in the footer navigation */
  @Input() links: FooterLink[] = [];

  /** Optional: set to the current path to get aria-current="page" on the active link */
  @Input() currentPath: string | null = null;

  /** Optional: customize the nav's aria-label (defaults to "Footer navigation") */
  @Input() ariaLabel?: string;

  @Input() label: string | undefined = undefined;

  trackByHref = (_: number, link: FooterLink) => link.url;

  isCurrent(href: string): boolean {
    if (!this.currentPath) return false;
    try {
      // Handle absolute and relative hrefs safely
      const url = new URL(href, 'http://dummy.base'); // base to parse relative URLs
      return url.pathname === this.currentPath;
    } catch {
      return href === this.currentPath;
    }
  }
  ngOnInit(): void {
  }

}
