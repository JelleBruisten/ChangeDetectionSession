import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { ReactiveComponentModule } from '@ngrx/component'

@Component({
  standalone: true,
  imports: [ParentComponent, CommonModule],
  selector: 'change-detection-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
})
export class SimpleComponent {

  triggerChangeDetection() {
    // this.cdr.detectChanges();
  }
}
