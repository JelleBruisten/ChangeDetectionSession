import { ChangeDetectionStrategy, Component } from '@angular/core';
import { changeDetection } from './change-detection';

@Component({
  selector: 'cd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: changeDetection
})
export class AppComponent {
  changeDetection = changeDetection;
  changeDetectionStrategy = ChangeDetectionStrategy;
}
