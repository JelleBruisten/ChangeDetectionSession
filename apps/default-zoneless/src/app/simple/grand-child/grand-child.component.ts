import { DoCheck, Component, Input, AfterViewChecked } from '@angular/core';
import { changeDetection } from '../../change-detection';

@Component({
  standalone: true,
  selector: 'cd-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css'],
  changeDetection: changeDetection,
})
export class GrandChildComponent implements DoCheck, AfterViewChecked {
  @Input() name = 'default-name';

  ngDoCheck(): void {
    console.log(
      `%cSimple-Grand-Child-${this.name} - ChangeDetection Started`,
      'color: green'
    );
  }

  ngAfterViewChecked(): void {
    console.log(
      `%cSimple-Grand-Child-${this.name} - ChangeDetection Ended`,
      'color: red'
    );
  }

  triggerChangeDetection() {
    console.log('');
  }
}
