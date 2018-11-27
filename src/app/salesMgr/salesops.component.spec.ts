import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesMgrComponent } from './salesMgr.component';

describe('SecurityComponent', () => {
  let component: SalesMgrComponent;
  let fixture: ComponentFixture<SalesMgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesMgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
