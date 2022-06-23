import { DoCheck, Component, AfterViewChecked, ɵmarkDirty as markDirty } from '@angular/core';
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
  changeDetection: changeDetection,
})
export class InputComponent implements DoCheck, AfterViewChecked {
  user: User = {
    age: 30,
    name: 'John Doe',
  };
  counter = 0;

  ngDoCheck(): void {
    console.log(`%cinput parent - ChangeDetection Started`, 'color: green');
  }

  ngAfterViewChecked(): void {
    console.log(`%cinput parent - ChangeDetection Ended`, 'color: red');
  }

  increaseCounter() {
    this.counter++;
    console.log('');
  }

  decreaseCounter() {
    this.counter--;
    console.log('');
  }

  changeUserProperties() {
    this.user.age = faker.datatype.number({ min: 18, max: 100 });
    this.user.name = faker.name.findName();
    console.log('');
    console.log(`User changed: ${JSON.stringify(this.user)}`);
    markDirty(this);
  }

  ChangeUser() {
    this.user = {
      age: faker.datatype.number({ min: 18, max: 100 }),
      name: faker.name.findName(),
    };
    console.log('');
    console.log(`User changed: ${JSON.stringify(this.user)}`);
    markDirty(this);
  }

  triggerChangeDetection() {
    console.log('');
  }
}
