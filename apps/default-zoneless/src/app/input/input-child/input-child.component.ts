import { DoCheck, Component, Input, AfterViewChecked, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { changeDetection } from '../../change-detection';

@Component({
  selector: 'cd-input-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css'],
  changeDetection: changeDetection,
})
export class InputChildComponent implements DoCheck, AfterViewChecked {
  @Input() counter = 0;
  @Input() user: User | null = null;

  ngDoCheck(): void {
    console.log(`%cinput child - ChangeDetection Started`, 'color: green');
  }

  ngAfterViewChecked(): void {
    console.log(`%cinput child - ChangeDetection Ended`, 'color: red');
  }

  triggerChangeDetection() {
    console.log('');
    // this.cdr.detectChanges();
  }
}
