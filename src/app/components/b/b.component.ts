import { Component, DestroyRef, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainService } from 'src/app/services/main.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent {
  mainService = inject(MainService)
  value = this.mainService.value
  computedSignal = computed(() => this.mainService.reference().toString())
  number = 0

  constructor() {
    effect(() => console.log(`value is ${this.value()} ${this.computedSignal()}`))
  }

  setValue() {
    this.value.set(this.number)
  }
}
