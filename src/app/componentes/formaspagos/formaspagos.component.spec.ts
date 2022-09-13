import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaspagosComponent } from './formaspagos.component';

describe('FormaspagosComponent', () => {
  let component: FormaspagosComponent;
  let fixture: ComponentFixture<FormaspagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaspagosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaspagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
