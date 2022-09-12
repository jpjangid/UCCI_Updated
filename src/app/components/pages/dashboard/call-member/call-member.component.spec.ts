import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallMemberComponent } from './call-member.component';

describe('CallMemberComponent', () => {
  let component: CallMemberComponent;
  let fixture: ComponentFixture<CallMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
