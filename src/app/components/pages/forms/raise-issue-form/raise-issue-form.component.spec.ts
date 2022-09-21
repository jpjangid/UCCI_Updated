import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseIssueFormComponent } from './raise-issue-form.component';

describe('RaiseIssueFormComponent', () => {
  let component: RaiseIssueFormComponent;
  let fixture: ComponentFixture<RaiseIssueFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseIssueFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaiseIssueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
