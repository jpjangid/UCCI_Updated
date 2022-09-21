import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNavbarUcciStaffComponent } from './dashboard-navbar-ucci-staff.component';

describe('DashboardNavbarUcciStaffComponent', () => {
  let component: DashboardNavbarUcciStaffComponent;
  let fixture: ComponentFixture<DashboardNavbarUcciStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNavbarUcciStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardNavbarUcciStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
