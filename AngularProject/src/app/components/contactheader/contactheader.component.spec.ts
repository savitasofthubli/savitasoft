import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactheaderComponent } from './contactheader.component';

describe('ContactheaderComponent', () => {
  let component: ContactheaderComponent;
  let fixture: ComponentFixture<ContactheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
