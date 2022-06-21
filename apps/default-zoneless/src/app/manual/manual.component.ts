import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  standalone: true,
  selector: 'cd-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css'],
})
export class ManualComponent implements OnDestroy {
  counter = 0;
  subscription: Subscription | undefined;
  constructor(private cdr: ChangeDetectorRef, private zone: NgZone) {
    this.zone.runOutsideAngular(() => {
      this.subscription = timer(0, 1000).subscribe(() => {      
        this.counter++;      
      });
    });
  }

  triggerChangeDetection() {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
