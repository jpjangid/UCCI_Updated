import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateOfOriginFormComponent } from './certificate-of-origin-form.component';

describe('CertificateOfOriginFormComponent', () => {
  let component: CertificateOfOriginFormComponent;
  let fixture: ComponentFixture<CertificateOfOriginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateOfOriginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateOfOriginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
