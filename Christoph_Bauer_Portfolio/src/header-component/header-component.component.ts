import { Component } from '@angular/core';
import { ButtonComponent } from "../Components/ang-button/ang-button.component";

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {

}
