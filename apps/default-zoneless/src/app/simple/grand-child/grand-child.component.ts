import { AfterViewChecked, Component, Input } from '@angular/core';
import { changeDetection } from '../../change-detection';

@Component({
  standalone: true,
  selector: 'cd-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css'],
  changeDetection: changeDetection
})
export class GrandChildComponent implements AfterViewChecked {

  @Input() name = 'default-name';

  ngAfterViewChecked(): void {
    console.log(`${this.name} - ChangeDetection`);
  }

  triggerChangeDetection() {
    // this.cdr.detectChanges();
  }
}
