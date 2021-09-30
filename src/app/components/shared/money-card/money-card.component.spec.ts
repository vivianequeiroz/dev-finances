import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyCardComponent } from './money-card.component';

describe('MoneyCardComponent', () => {
  let component: MoneyCardComponent;
  let fixture: ComponentFixture<MoneyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
