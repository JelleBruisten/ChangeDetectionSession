import { CommonModule } from '@angular/common';
import { DoCheck, Component, AfterViewChecked } from '@angular/core';
import { changeDetection } from '../../change-detection';
import { ChildComponent } from '../child/child.component';

@Component({
  standalone: true,
  imports: [ChildComponent, CommonModule],
  selector: 'cd-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: changeDetection,
})
export class ParentComponent implements DoCheck, AfterViewChecked {
  childs = [
    {
      name: 'Alice',
      children: ['Ivan', 'Judy'],
    },
    {
      name: 'Bob',
      children: ['Charlie', 'Carol'],
    },
  ];

  ngDoCheck(): void {
    console.log(
      `%cSimple-Parent - ChangeDetection Started`,
      'color: green'
    );
  }

  ngAfterViewChecked(): void {
    console.log(
      `%cSimple-Parent - ChangeDetection Ended`,
      'color: red'
    );
  }

  triggerChangeDetection() {
    console.log('');
  }
}
