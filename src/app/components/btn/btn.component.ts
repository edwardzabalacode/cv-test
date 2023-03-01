import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent {
  @Input() text: string = '';
  @Input() size: string = 'regular';
  @Input() fill: string = 'solid';
  @Input() color: string = 'primary';
  @Input() expand: string = 'regular';

  styles: string | undefined = '';

  ngOnInit() {
    this.styles = this.getStyles();
  }

  getStyles(): string | undefined {
    const colors: any = {
      primary: 'bg-primary text-white',
      onPrimary: 'bg-onPrimary text-white',
      secondary: 'bg-secondary text-white',
    };

    const sizeClass: any = {
      large: 'px-8 py-4 text-lg',
      regular: 'px-6 py-3 text-base',
      small: 'px-4 py-2 text-sm',
    };

    const expandClass: any = {
      block: `w-full`,
    };

    const sizeStyle = sizeClass[this.size] || '';
    const fillStyle = colors[this.color] || '';
    const expandStyle = expandClass[this.expand] || '';

    const style = `rounded-sm mx-1 transition-all ease-in duration-75 ${sizeStyle} ${fillStyle} ${expandStyle}`;

    return style;
  }
}
