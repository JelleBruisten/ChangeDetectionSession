import { CommonModule } from '@angular/common';
import { DoCheck, Component, AfterViewChecked } from '@angular/core';
import { MultiplyPipe } from './multiply.pipe';
import { CdkTransformPipe } from './transform.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, MultiplyPipe, CdkTransformPipe],
  selector: 'cd-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements DoCheck, AfterViewChecked {
  numbers: number[] = [];

  constructor() {
    this.numbers = [...Array(10).keys()];
  }

  multiply(a: number, b: number) {
    console.log(`Multiply: ${a * b}`);
    return a * b;
  }

  ngDoCheck(): void {
    console.log(`%cPipe - ChangeDetection Started`, 'color: green');
  }

  ngAfterViewChecked(): void {
    console.log(`%cPipe - ChangeDetection Ended`, 'color: red');
  }

  triggerChangeDetection() {
    console.log('');
  }
}
