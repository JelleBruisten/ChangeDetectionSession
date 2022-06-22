import {
  AfterViewChecked,
  Component,
  ɵdetectChanges as detectChanges,
  ɵmarkDirty as markDirty,
} from '@angular/core';
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
    // markDirty(this);
  }

  ngAfterViewChecked(): void {
    console.log('Expression Parent: ChangeDetection');
  }

  handleCounterChanged(counter: number) {
    // markDirty(this);
    this.counter = counter;
  }

  triggerChangeDetection() {
    // markDirty(this);
  }
}
