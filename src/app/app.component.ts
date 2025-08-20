import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NeveHeaderComponent } from './components/header/NeveHeaderComponet';
import { NeveButtonComponent } from './components/button/NeveButtonComponent';
import { NeveImageComponent } from './components/img/NeveImageComponent';
import { NeveCrossLinkComponent } from './components/crosslink/NeveCrossLinkComponent';
import { NeveCardComponent } from './components/card/NeveCardComponent';
import { NeveFooterComponent } from './components/footer/NeveFooterComponent';
import { DataService } from './services/paylod.service';
import { HttpClient } from '@angular/common/http';
import { SiteData } from './components/models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NeveHeaderComponent, NeveButtonComponent, NeveImageComponent, NeveCrossLinkComponent,
    NeveCardComponent, NeveFooterComponent, CommonModule
  ],
  providers: [DataService, HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'neve';

  // Config
  config: SiteData = {
    header: {
      cta: {
        label: '',
        url: ''
      },
      logo: {
        ariaLabel: '',
        svgUrl: ''
      }
    },
    footer: {
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
    },
    hero: {
      title: '',
      subtitle: ''
    },
    welcome: {
      ctas: []
    },
    gallery: {},
    crosslinks: [],
    newsHighlights: {
      cta: {
        label: 'All news',
        url: '',
        style: ''
      }
    },
    manifesto: {
      image: {
        src: '',
        srcset: []
      }
    }
  };

  //variables
  heroimgs: string[] = [];
  herosrc: string = '';
  
  constructor(private dataService: DataService) {}

  async ngOnInit(): Promise<void> {
    // Get data from data service
    try {
      this.config = await this.dataService.getSiteData();
    } catch (error) {
      console.error('Error loading site data', error);
    }
    
    this.heroimgs = this.config.hero.images?.desktop.srcset ? this.config.hero.images.desktop.srcset : [];
    this.herosrc = this.config.hero.images?.desktop.src ? this.config.hero.images?.desktop.src : ''
  }

  get ctas() {
    return this.config.welcome.ctas;
  }
  get gallery(){
    return this.config.gallery.items?.slice(0,4)
  }
  get crosslinks(){
    return this.config.crosslinks
  }
  get newHighlights(){
    return this.config.newsHighlights;
  }
  get newHighlightsItems() {
    return this.newHighlights.items;
  }
  get manifesto(){
    return this.config.manifesto;
  }
}
