import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19ReportsComponent } from './covid19-reports.component';

describe('Covid19ReportsComponent', () => {
  let component: Covid19ReportsComponent;
  let fixture: ComponentFixture<Covid19ReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Covid19ReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19ReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
