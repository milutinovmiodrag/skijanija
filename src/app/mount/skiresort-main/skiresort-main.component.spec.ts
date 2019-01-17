import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiresortMainComponent } from './skiresort-main.component';

describe('SkiresortMainComponent', () => {
  let component: SkiresortMainComponent;
  let fixture: ComponentFixture<SkiresortMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiresortMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiresortMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
