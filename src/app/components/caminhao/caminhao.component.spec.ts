import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminhaoComponent } from './caminhao.component';

describe('CaminhaoComponent', () => {
  let component: CaminhaoComponent;
  let fixture: ComponentFixture<CaminhaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaminhaoComponent]
    });
    fixture = TestBed.createComponent(CaminhaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
