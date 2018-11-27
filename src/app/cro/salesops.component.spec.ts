import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroComponent } from './cro.component';

describe('SecurityComponent', () => {
  let component: CroComponent;
  let fixture: ComponentFixture<CroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
