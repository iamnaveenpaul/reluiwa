import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AibooksComponent } from './aibooks.component';

describe('PricingComponent', () => {
  let component: AibooksComponent;
  let fixture: ComponentFixture<AibooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AibooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AibooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
