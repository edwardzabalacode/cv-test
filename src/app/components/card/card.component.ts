import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
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
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() icons: IconDefinition[] = [];
  @Input() title: string = '';
  @Input() description: string = '';

  faCoffe = faCoffee;
  faReact = faReact;
  faNode = faNode;
  faPython = faPython;
  faHtml5 = faHtml5;
  faCss3Alt = faCss3Alt;
  faGit = faGit;
  faAngular = faAngular;
}
