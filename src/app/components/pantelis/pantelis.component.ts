import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantelis',
  templateUrl: './pantelis.component.html',
  styleUrls: ['./pantelis.component.scss']
})
export class PantelisComponent implements OnInit, OnDestroy {

  sum: string
  num1;
  num2;

  items

  constructor() { }

  ngOnInit(): void {
    // this.addNumbers(8, 9)
    this.items = [
      { id: 1, name: 'pantelis' },
      { id: 2, name: 'dora' },
    ]
    console.log(this.sum)
  }

  addNumbers(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.sum = num1 + num2;
  }

  ngOnDestroy() {

  }

}
