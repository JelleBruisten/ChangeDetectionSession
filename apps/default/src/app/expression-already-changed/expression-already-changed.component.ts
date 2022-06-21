import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpressionCauseComponent } from './expression-cause/expression-cause.component';

@Component({
  selector: 'cd-expression-already-changed',
  standalone: true,
  imports: [CommonModule, ExpressionCauseComponent],
  templateUrl: './expression-already-changed.component.html',
  styleUrls: ['./expression-already-changed.component.css'],
})
export class ExpressionAlreadyChangedComponent implements AfterViewChecked {

  counter = 1;

  increaseCounter() {
    this.counter++;
  }

  ngAfterViewChecked(): void {
    console.log('Expression Parent: ChangeDetection');
  }

  handleCounterChanged(counter: number) {
    this.counter = counter;
  }

  triggerChangeDetection() {
    // this.cdr.detectChanges();
  }
}
