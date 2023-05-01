import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalcoursesComponent } from './finalcourses.component';

describe('FinalcoursesComponent', () => {
  let component: FinalcoursesComponent;
  let fixture: ComponentFixture<FinalcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalcoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
