import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseIssuesListComponent } from './raise-issues-list.component';

describe('RaiseIssuesListComponent', () => {
  let component: RaiseIssuesListComponent;
  let fixture: ComponentFixture<RaiseIssuesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseIssuesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaiseIssuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
