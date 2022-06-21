import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, Input } from '@angular/core';
import { changeDetection } from '../../change-detection';
import { GrandChildComponent } from '../grand-child/grand-child.component';

@Component({
  standalone: true,
  imports: [
    GrandChildComponent,
    CommonModule
  ],
  selector: 'cd-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: changeDetection
})
export class ChildComponent implements AfterViewChecked {

  @Input() name = 'default-name';
  @Input() children: string[] = [];


  ngAfterViewChecked(): void {
    console.log(`${this.name} - ChangeDetection`);
  }  

  triggerChangeDetection() {
    // this.cdr.detectChanges();
  }
}
