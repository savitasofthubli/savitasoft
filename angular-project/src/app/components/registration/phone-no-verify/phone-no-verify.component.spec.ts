import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNoVerifyComponent } from './phone-no-verify.component';

describe('PhoneNoVerifyComponent', () => {
  let component: PhoneNoVerifyComponent;
  let fixture: ComponentFixture<PhoneNoVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneNoVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneNoVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
