/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import { DoCheck, Component, EventEmitter, Input, OnChanges, Output, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cd-cause',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expression-cause.component.html',
  styleUrls: ['./expression-cause.component.css'],
})
export class ExpressionCauseComponent
  implements OnChanges, DoCheck, AfterViewChecked
{
  @Input() counter = 1;

  @Output() counterChanged = new EventEmitter<number>();

  ngDoCheck(): void {
    console.log('Expression Child: ChangeDetection started');
  }

  ngAfterViewChecked(): void {
    console.log('Expression Child: ChangeDetection ended');
  }

  triggerChangeDetection() {
    // this.cdr.detectChanges();
  }

  ngOnChanges() {
    this.counter++;
    this.counterChanged.emit(this.counter);
  }
}
