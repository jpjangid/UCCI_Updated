import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredNonMemberListComponent } from './registered-non-member-list.component';

describe('RegisteredNonMemberListComponent', () => {
  let component: RegisteredNonMemberListComponent;
  let fixture: ComponentFixture<RegisteredNonMemberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredNonMemberListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredNonMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
