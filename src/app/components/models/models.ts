// Config Interface
export interface SiteData {
// Future: I would use this ofr an app builder that creates my apps
  site?: {
    name: string;
    baseUrl: string;
    theme: string;
  };
  // Header interface
  header: Header;
  hero: {
    title: string | null;
    subtitle: string | null;
    images?: {
      desktop: ImageData;
      mobile: ImageData;
    };
  };
  welcome: {
    title?: string;
    richText?: string;
    ctas: HeaderCTA[];
  };
  gallery: {
    items?: GalleryItem[];
  };
  crosslinks: Crosslink[];
  newsHighlights: {
    title?: string;
    description?: string;
    cta: HeaderCTA;
    items?: NewsItem[];
  };
  manifesto: {
    image: ImageData;
    title?: string;
    excerpt?: string;
    cta?: HeaderCTA;
  };
  tickets?: {
    title: string;
    description: string;
    items: TicketItem[];
  };
  footer: Footer;
}
// Header
export interface Header {
  cta: {
    label: string;
    url: string;
  };
  logo: {
    ariaLabel: string;
    svgUrl: string;
  };
  menu?: NeveMenuItem[];
}
// Menu Item
export interface NeveMenuItem {
  label: string;
  link?: string;
  icon?: string;
  children?: NeveMenuItem[];
}
// Image Interface
export interface ImageData {
  src: string;
  srcset: string[] | [];
}
// Header CTA
export interface HeaderCTA {
  label: string;
  style: string;
  url: string;
}
// Gallery
export interface GalleryItem {
  thumb: string;
  full: string;
  srcset: string[];
  caption: string;
}
// Crosslink
export interface Crosslink {
  label: string;
  title: string;
  url: string;
  style?: string;
}
// News
export interface NewsItem {
  dateLabel: string;
  categories: string[];
  title: string;
  url: string;
  image: string;
  imageAlt?: string;
}
// Ticket
export interface TicketItem {
  venue: string;
  date?: string;
  dateRange?: string[];
  title: string;
  tooltip: string;
  prices: Price[];
  buyUrl: string;
}
// Price
export interface Price {
  release: string;
  price: number;
  currency: string;
  soldOut: boolean;
}
// Footer
export type FooterLink = {
  label: string;
  url: string;
  ariaLabel?: string;
  children?: FooterLink[];
};
export interface Footer {
  newsletter: {
    label: string;
    cta: string;
    url: string;
  };
  menus: {
    primary: FooterLink[];
    meetingFestival: {
      label: string;
      items: FooterLink[];
    };
    info: {
      label: string;
      items: FooterLink[];
    };
    legal: {
      label: string;
      items: FooterLink[];
    };
  };
  social?: { label: string; url: string }[];
  credits?: {
    copyright: string;
    byline: string;
    bylineUrl: string;
    design: { label: string; url: string };
    code: { label: string; url: string }[];
  };
  partnersLogo?: {
    label: string;
    url: string;
    logoSvg: string;
  };
}

  