import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantelisComponent } from './pantelis.component';

describe('PantelisComponent', () => {
  let component: PantelisComponent;
  let fixture: ComponentFixture<PantelisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantelisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
