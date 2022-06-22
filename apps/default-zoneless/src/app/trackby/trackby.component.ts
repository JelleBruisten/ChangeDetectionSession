import { AfterViewChecked, Component, DoCheck, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackbyChildComponent } from './trackby-child/trackby-child.component';

@Component({
  selector: 'cd-trackby',
  standalone: true,
  imports: [CommonModule, TrackbyChildComponent],
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.css'],
})
export class TrackbyComponent implements DoCheck, AfterViewChecked {
  items = [
    {
      id: 1,
      name: 'Jelle',
    },
    {
      id: 2,
      name: 'Maikel',
    },
    {
      id: 4,
      name: 'Frank',
    },
    {
      id: 3,
      name: 'Brian',
    },
  ];

  addOne() {
    this.items = [
      ...this.items,
      {
        id: 5,
        name: 'Aris',
      },
    ];
  }

  removeOne() {
    const index = this.items.findIndex((x) => x.name === 'Frank');
    if(index >= 0) {
      this.items = [
        ...this.items.slice(0, index),
        ...this.items.slice(index + 1),
      ];
    }
  }

  shuffle() {
    const array = this.items;
    let currentIndex = this.items.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    this.items = [... array];
  }

  deepReferencesChanged() {
    const array = this.items;
    const items = [];
    for(const e of array) {
      items.push({... e});
    }
    this.items = [... items];
  }

  ngDoCheck(): void {
    console.log(`%cTrackBy-Parent - ChangeDetection Started`, 'color: green');
  }

  ngAfterViewChecked(): void {
    console.log(`%cTrackBy-Parent - ChangeDetection Ended`, 'color: red');
  }

  trackBy(index: number, name: { id: string | number}): number | string {
    return name.id;
  }
}
