import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesopsComponent } from './salesops.component';

describe('SecurityComponent', () => {
  let component: SalesopsComponent;
  let fixture: ComponentFixture<SalesopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
