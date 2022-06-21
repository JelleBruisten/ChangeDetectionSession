import { AfterViewChecked, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faker } from '@faker-js/faker';
import { User } from './user';
import { InputChildComponent } from './input-child/input-child.component';
import { changeDetection } from '../change-detection';

@Component({
  selector: 'cd-input',
  standalone: true,
  imports: [CommonModule, InputChildComponent],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: changeDetection
})
export class InputComponent implements AfterViewChecked {

  user: User = {
    age: 30,
    name: 'John Doe',
  }
  counter = 0;

  ngAfterViewChecked(): void {
    console.log(`input - ChangeDetection`);
  }

  increaseCounter() {
    this.counter++;
  }

  decreaseCounter() {
    this.counter--;
  }

  changeUserProperties() {
    
    this.user.age = faker.datatype.number({ min: 18, max: 100 });
    this.user.name = faker.name.findName();
    console.log(`User changed: ${JSON.stringify(this.user)}`);
  }

  ChangeUser() {
    this.user = {
      age: faker.datatype.number({ min: 18, max: 100 }),
      name: faker.name.findName(),
    }
    console.log(`User changed: ${JSON.stringify(this.user)}`);
  }

  triggerChangeDetection() {
    // this.cdr.detectChanges();
  }
}
