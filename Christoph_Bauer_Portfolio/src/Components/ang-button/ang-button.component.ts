import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './ang-button.component.html',
  styleUrls: ['./ang-button.component.css']
})
export class ButtonComponent {
  @Input()
  ButtonText: string = 'ButtonText';

  @Input()
  Styles: string = '';

  constructor() {}
}
