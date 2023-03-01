import { Component } from '@angular/core';
import {
  faReact,
  faNode,
  faPython,
  faHtml5,
  faCss3Alt,
  faGit,
  faAngular,
} from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  faCoffe = faCoffee;
  faReact = faReact;
  faNode = faNode;
  faPython = faPython;
  faHtml5 = faHtml5;
  faCss3Alt = faCss3Alt;
  faGit = faGit;
  faAngular = faAngular;

  skills = [
    {
      icons: [faCoffee],
      title: 'Vanilla Javascript',
      description:
        'List technologies here. You can change the icon above to any of the 1500+ fontAwesome free icons available.',
    },
    {
      icons: [faReact],
      title: 'React',
      description: 'A JavaScript library for building user interfaces',
    },
    {
      icons: [faNode],
      title: 'Node.js',
      description:
        'An open-source, cross-platform, JavaScript runtime environment',
    },
    {
      icons: [faPython],
      title: 'Python',
      description: 'A high-level, interpreted programming language',
    },
    {
      icons: [faHtml5],
      title: 'HTML',
      description: 'Hypertext Markup Language',
    },
    {
      icons: [faCss3Alt],
      title: 'CSS',
      description: 'Cascading Style Sheets',
    },
    {
      icons: [faGit],
      title: 'Git',
      description: 'A free and open source distributed version control system',
    },
    {
      icons: [faAngular],
      title: 'Angular',
      description: 'A TypeScript-based open-source web application framework',
    },
  ];
}
