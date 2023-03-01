import { Component } from '@angular/core';
import {
  faTwitter,
  faLinkedin,
  faYoutube,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

import {
  faUser,
  faLaptop,
  faFile,
  faBriefcase,
  faBlog,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  faStackOverflow = faStackOverflow;

  faUser = faUser;
  faLaptop = faLaptop;
  faFile = faFile;
  faBriefcase = faBriefcase;
  faBlog = faBlog;
  faEnvelope = faEnvelope;

  menuList = [
    {
      icon: faUser,
      label: 'About me',
      route: '/about',
    },
    {
      icon: faLaptop,
      label: 'Portafolio',
      route: '/portafolio',
    },
    {
      icon: faBriefcase,
      label: 'Services and pricing',
      route: '/services',
    },
    {
      icon: faFile,
      label: 'Resume',
      route: '/resume',
    },
    {
      icon: faBlog,
      label: 'Blog',
      route: '/blog',
    },
    {
      icon: faEnvelope,
      label: 'Contact',
      route: '/contact',
    },
  ];

  socialButtons = [
    {
      icon: faTwitter,
      url: 'https://twitter.com/edCode12',
    },
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/edward-zabala-2760bab1/',
    },
    {
      icon: faYoutube,
      url: 'https://www.youtube.com/@EDcode12',
    },
    {
      icon: faStackOverflow,
      url: 'https://www.youtube.com/@EDcode12',
    },
  ];
}
