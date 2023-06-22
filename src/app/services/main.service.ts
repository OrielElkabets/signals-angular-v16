import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  readonly value = signal(0)
  readonly reference = signal<number[]>([])
  readonly subject = new Subject<void>()
}
