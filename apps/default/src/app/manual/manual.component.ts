import {
  DoCheck,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  OnInit,
  AfterViewChecked,
} from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  standalone: true,
  selector: 'cd-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css'],
})
export class ManualComponent implements OnDestroy, DoCheck, AfterViewChecked {
  counter = 0;
  subscription: Subscription | undefined;
  constructor(private cdr: ChangeDetectorRef, private zone: NgZone) {
    this.zone.runOutsideAngular(() => {
      this.subscription = timer(0, 1000).subscribe(() => {
        this.zone.run(() => {
          this.counter++;
        });
      });
    });
  }

  ngDoCheck(): void {
    console.log(`%cManual - ChangeDetection Started`, 'color: green');
  }

  ngAfterViewChecked(): void {
    console.log(`%cManual - ChangeDetection Ended`, 'color: red');
  }

  triggerChangeDetection() {
    console.log('');
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
