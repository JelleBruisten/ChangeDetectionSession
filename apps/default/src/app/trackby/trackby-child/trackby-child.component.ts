import { AfterViewChecked, Component, DoCheck, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cd-trackby-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trackby-child.component.html',
  styleUrls: ['./trackby-child.component.css'],
})
export class TrackbyChildComponent implements OnInit, OnDestroy, DoCheck, AfterViewChecked {
  @Input() item: { id: string | number; name: string } | null = null;

  ngOnInit() {
    console.log(`%cTrackBy-Child: ${this.item?.name} - Created`, 'color: green');
  }

  ngDoCheck(): void {
    console.log(
      `%cTrackBy-Child: ${this.item?.name} - ChangeDetection Started`,
      'color: green'
    );
  }

  ngAfterViewChecked(): void {
    console.log(
      `%cTrackBy-Child: ${this.item?.name} - ChangeDetection Ended`,
      'color: red'
    );
  }

  ngOnDestroy(): void {
    console.log(
      `%cTrackBy-Child: ${this.item?.name} - Destroyed`,
      'color: red'
    );
  }
}
