import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatecoursesComponent } from './animatecourses.component';

describe('AnimatecoursesComponent', () => {
  let component: AnimatecoursesComponent;
  let fixture: ComponentFixture<AnimatecoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatecoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatecoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
