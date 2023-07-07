import { ComponentFixture, TestBed } from '@angular/core/testing';

import {AboutHeaderComponent} from './aboutheader.component'

describe('AboutHeaderComponent', () => {
  let component: AboutHeaderComponent;
  let fixture: ComponentFixture<AboutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
