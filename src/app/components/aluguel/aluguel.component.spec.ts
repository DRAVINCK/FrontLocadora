import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluguelComponent } from './aluguel.component';

describe('AluguelComponent', () => {
  let component: AluguelComponent;
  let fixture: ComponentFixture<AluguelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AluguelComponent]
    });
    fixture = TestBed.createComponent(AluguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
