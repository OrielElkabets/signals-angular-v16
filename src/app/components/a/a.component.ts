import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent {
  mainService = inject(MainService)
  value = this.mainService.value
  reference = this.mainService.reference

  plus() {
    this.value.update(prev => prev + 1)
  }

  append() {
    this.reference.mutate(cur => cur.push(cur.length));
  }
}
