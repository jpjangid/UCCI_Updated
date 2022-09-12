import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularMemberListComponent } from './regular-member-list.component';

describe('RegularMemberListComponent', () => {
  let component: RegularMemberListComponent;
  let fixture: ComponentFixture<RegularMemberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularMemberListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
