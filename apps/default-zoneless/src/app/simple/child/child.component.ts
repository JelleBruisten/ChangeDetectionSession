import { CommonModule } from '@angular/common';
import { DoCheck, Component, Input, AfterViewChecked } from '@angular/core';
import { changeDetection } from '../../change-detection';
import { GrandChildComponent } from '../grand-child/grand-child.component';

@Component({
  standalone: true,
  imports: [GrandChildComponent, CommonModule],
  selector: 'cd-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: changeDetection,
})
export class ChildComponent implements DoCheck, AfterViewChecked {
  @Input() name = 'default-name';
  @Input() children: string[] = [];


  ngDoCheck(): void {
    console.log(`%cSimple-Child-${this.name} - ChangeDetection Started`, 'color: green');
  }

  ngAfterViewChecked(): void {
    console.log(
      `%cSimple-Child-${this.name} - ChangeDetection Ended`,
      'color: red'
    );
  }

  triggerChangeDetection() {
    console.log('');
  }
}
