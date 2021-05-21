import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationReportsComponent } from './vaccination-reports.component';

describe('VaccinationReportsComponent', () => {
  let component: VaccinationReportsComponent;
  let fixture: ComponentFixture<VaccinationReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
