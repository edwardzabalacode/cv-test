import { Component, Input } from '@angular/core';
import {
  faTwitter,
  faLinkedin,
  faYoutube,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.scss'],
})
export class SocialButtonComponent {
  @Input() icon!: any;
  @Input() url: string = '';

  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  faStackOverflow = faStackOverflow;
}
