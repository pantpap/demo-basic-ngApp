import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantelis',
  templateUrl: './pantelis.component.html',
  styleUrls: ['./pantelis.component.scss']
})
export class PantelisComponent implements OnInit, OnDestroy {

  sum: string
  constructor() { }

  ngOnInit(): void {
    this.addNumbers(1, 2)
    console.log(this.sum)
  }

  addNumbers(num1, num2) {
    this.sum = num1 + num2;
  }

  ngOnDestroy() {

  }

}
