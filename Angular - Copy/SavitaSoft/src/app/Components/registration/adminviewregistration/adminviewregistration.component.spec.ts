import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewregistrationComponent } from './adminviewregistration.component';

describe('AdminviewregistrationComponent', () => {
  let component: AdminviewregistrationComponent;
  let fixture: ComponentFixture<AdminviewregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
