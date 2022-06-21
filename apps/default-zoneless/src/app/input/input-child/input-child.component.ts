import { AfterViewChecked, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { changeDetection } from '../../change-detection';

@Component({
  selector: 'cd-input-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css'],
  changeDetection: changeDetection
})
export class InputChildComponent implements AfterViewChecked {

  @Input() counter = 0;
  @Input() user: User | null = null;

  ngAfterViewChecked(): void {
    console.log(`input child - ChangeDetection`);
  }

  triggerChangeDetection() {
    // this.cdr.detectChanges();
  }
}
