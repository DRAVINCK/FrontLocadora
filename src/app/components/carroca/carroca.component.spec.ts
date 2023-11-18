import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrocaComponent } from './carroca.component';

describe('CarrocaComponent', () => {
  let component: CarrocaComponent;
  let fixture: ComponentFixture<CarrocaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrocaComponent]
    });
    fixture = TestBed.createComponent(CarrocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
