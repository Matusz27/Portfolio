import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCodeComponent } from './button-code.component';

describe('ButtonCodeComponent', () => {
  let component: ButtonCodeComponent;
  let fixture: ComponentFixture<ButtonCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
