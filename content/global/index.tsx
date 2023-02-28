import { Instagram, LinkedIn, Dribbble } from "iconoir-react";

export interface SiteSettings {
  settings: Settings;
  header: Header;
  footer: Footer;
  theme: Theme;
}

export interface Footer {
  sections: Section[];
  color: string;
  social: FooterSocial;
}

export interface Section {
  title: string;
  nav: Nav[];
}

export interface Nav {
  href: string;
  label: string;
}

export interface Header {
  icon: Icon;
  color: string;
  nav: Nav[];
}

export interface Icon {
  color: string;
  style: string;
  name: string;
}

export interface Settings {
  siteTitle: string;
  siteDescription: string;
  social: SettingsSocial;
}

export interface SettingsSocial {
  [key: string]: {
    name: string;
    icon: React.ReactNode;
    url: string;
  };
}

export interface Theme {
  color: string;
  icon: string;
  darkMode: string;
}

const settings: SiteSettings = {
  settings: {
    siteTitle: "Hatch Head",
    siteDescription: "Brisbane based UX Studio",
    social: {
      instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/hatchhead.co",
        icon: <Instagram />,
      },
      dribble: {
        name: "Dribble",
        url: "https://dribbble.com/hatchhead",
        icon: <Dribbble />,
      },
      linkedIn: {
        name: "Linked In",
        url: "https://au.linkedin.com/company/hatch-head",
        icon: <LinkedIn />,
      },
    },
  },
  header: {
    icon: {
      color: "orange",
      style: "float",
      name: "tina",
    },
    color: "default",
    nav: [
      {
        href: "case-studies",
        label: "Work",
      },
      {
        href: "services",
        label: "Services",
      },
      {
        href: "about",
        label: "About",
      },
      {
        href: "contact",
        label: "Contact",
      },
    ],
  },
  footer: {
    sections: [
      {
        title: "Services",
        nav: [
          {
            href: "/services/ui-design",
            label: "UI Design",
          },
          {
            href: "/services/ux-research",
            label: "UX Research",
          },
          {
            href: "/services/design-sprints",
            label: "Design Sprints",
          },
          {
            href: "/services/product-strategy",
            label: "Product Strategy",
          },
          {
            href: "/services/usability-testing",
            label: "Usability Testing",
          },
        ],
      },
      {
        title: "Solutions",
        nav: [
          {
            href: "/",
            label: "Design Systems",
          },
          {
            href: "/",
            label: "Product Websites",
          },
          {
            href: "/",
            label: "Product Iteration",
          },
          {
            href: "/",
            label: "New Ventures",
          },
          {
            href: "/",
            label: "Product Road Maps",
          },
        ],
      },
      {
        title: "More",
        nav: [
          {
            href: "/",
            label: "About",
          },
          {
            href: "/",
            label: "Blog",
          },
          {
            href: "/",
            label: "Contact",
          },
          {
            href: "/",
            label: "Terns & Conditions",
          },
          {
            href: "/",
            label: "Privacy Policy",
          },
        ],
      },
    ],
    color: "default",
    social: {
      facebook: "/",
      twitter: "/",
      instagram: "/",
    },
  },
  theme: {
    color: "blue",
    icon: "boxicon",
    darkMode: "system",
  },
};

export default settings;
