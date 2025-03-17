import { SharedComponent } from '@trip/shared';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
    imports: [
        SharedComponent
    ]
})
export class AppComponent {
}
