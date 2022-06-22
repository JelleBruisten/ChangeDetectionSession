import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ɵmarkDirty as markDirty,
} from '@angular/core';
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
export class ParentComponent implements AfterViewChecked {
  constructor(private cdr: ChangeDetectorRef) {}

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

  ngAfterViewChecked(): void {
    console.log(`parent - ChangeDetection`);
    markDirty(this);
  }

  triggerChangeDetection() {
    this.cdr.markForCheck();
  }
}
