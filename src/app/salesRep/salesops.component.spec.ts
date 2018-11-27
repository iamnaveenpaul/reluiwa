import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRepComponent } from './salesRep.component';

describe('SecurityComponent', () => {
  let component: SalesRepComponent;
  let fixture: ComponentFixture<SalesRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
