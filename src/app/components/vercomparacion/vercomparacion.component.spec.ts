import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercomparacionComponent } from './vercomparacion.component';

describe('VercomparacionComponent', () => {
  let component: VercomparacionComponent;
  let fixture: ComponentFixture<VercomparacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VercomparacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VercomparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
