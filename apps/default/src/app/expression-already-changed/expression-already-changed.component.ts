import { DoCheck, Component, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpressionCauseComponent } from './expression-cause/expression-cause.component';

@Component({
  selector: 'cd-expression-already-changed',
  standalone: true,
  imports: [CommonModule, ExpressionCauseComponent],
  templateUrl: './expression-already-changed.component.html',
  styleUrls: ['./expression-already-changed.component.css'],
})
export class ExpressionAlreadyChangedComponent implements DoCheck, AfterViewChecked {
  counter = 1;

  increaseCounter() {
    this.counter++;
  }

  ngDoCheck(): void {
    console.log('Expression Parent: ChangeDetection started');
  }

  ngAfterViewChecked(): void {
    console.log('Expression Parent: ChangeDetection ended');
  }

  handleCounterChanged(counter: number) {
    this.counter = counter;
  }

  triggerChangeDetection() {
    // this.cdr.detectChanges();
  }
}
