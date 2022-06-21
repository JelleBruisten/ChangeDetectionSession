import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, ɵmarkDirty as markDirty } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cd-cause',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expression-cause.component.html',
  styleUrls: ['./expression-cause.component.css'],
})
export class ExpressionCauseComponent implements OnChanges, AfterViewChecked, AfterViewInit {

  @Input() counter = 1;

  @Output() counterChanged = new EventEmitter<number>();


  ngAfterViewInit() {
    this.counter = 8;
    console.log('Expression cause: AfterViewInit', this.counter);
  }

  ngAfterViewChecked(): void {
    console.log('Expression cause: ChangeDetection');
  }

  triggerChangeDetection() {
    // markDirty(this);
    // this.cdr.detectChanges();
  }

  ngOnChanges() {
    this.counter++;
    this.counterChanged.emit(this.counter);
  }
}
