import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component } from '@angular/core';
import { MultiplyPipe } from './multiply.pipe';
import { CdkTransformPipe } from './transform.pipe';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MultiplyPipe,
    CdkTransformPipe
  ],
  selector: 'cd-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements AfterViewChecked {
  numbers: number[] = [];

  constructor() {
    this.numbers = [...Array(10).keys()];
  }

  multiply(a: number, b: number) {
    console.log(`Multiply: ${a * b}`);
    return a * b;
  }

  ngAfterViewChecked(): void {
    console.log(`Pipe - ChangeDetection`);
  }

  triggerChangeDetection() {}
}
