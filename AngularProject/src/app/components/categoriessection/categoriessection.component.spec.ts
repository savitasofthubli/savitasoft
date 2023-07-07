import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriessectionComponent } from './categoriessection.component';

describe('CategoriessectionComponent', () => {
  let component: CategoriessectionComponent;
  let fixture: ComponentFixture<CategoriessectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriessectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriessectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
