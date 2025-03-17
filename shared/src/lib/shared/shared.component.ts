import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from "@trip/test";

@Component({
  selector: 'lib-shared',
  imports: [CommonModule, TestComponent],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.scss',
})
export class SharedComponent {}
