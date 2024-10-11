import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from "../header-component/header-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Christoph_Bauer_Portfolio';
  Description: string[] = [' Fotograf', ' Videograf', ' Cutter'];
  viewText:string = '';

  async ngOnInit() {
    await this.TextEffect();
  }

  async TextEffect() {
    while (true) {
      for (let desc of this.Description) {
        for (let txt of desc) {
          this.viewText += txt;
          await this.sleep(300);
        }
        await this.sleep(1000)
        while (this.viewText.length > 0) {
          this.viewText = this.viewText.slice(0, -1);
          await this.sleep(300);
        }
      }
    }
  }


  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  transformStyle: string = '';

  onMouseMove(event: MouseEvent) {
    const imageContainer = event.currentTarget as HTMLElement;
    const rect = imageContainer.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 20;
    const moveY = (y / rect.height - 0.5) * 20;

    this.transformStyle = `translate(${moveX}px, ${moveY}px) scale(1.0)`;
  }

  onMouseLeave() {
    this.transformStyle = 'translate(0, 0) scale(1)';
  }
}
