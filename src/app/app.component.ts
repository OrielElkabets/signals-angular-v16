import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AComponent } from "./components/a/a.component";
import { BComponent } from "./components/b/b.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, AComponent, BComponent]
})
export class AppComponent {
  title = 'SignalsPractice';
}
