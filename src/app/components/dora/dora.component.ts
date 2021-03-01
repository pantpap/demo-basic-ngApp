import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dora',
  templateUrl: './dora.component.html',
  styleUrls: ['./dora.component.scss']
})
export class DoraComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('dora component destroyed')
  }

}
