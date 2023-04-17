import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaboutusComponent } from './viewaboutus.component';

describe('ViewaboutusComponent', () => {
  let component: ViewaboutusComponent;
  let fixture: ComponentFixture<ViewaboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewaboutusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewaboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
