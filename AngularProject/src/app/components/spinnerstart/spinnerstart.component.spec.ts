import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerstartComponent } from './spinnerstart.component';

describe('SpinnerstartComponent', () => {
  let component: SpinnerstartComponent;
  let fixture: ComponentFixture<SpinnerstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerstartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
