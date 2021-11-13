import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLiveComponent } from './button-live.component';

describe('ButtonLiveComponent', () => {
  let component: ButtonLiveComponent;
  let fixture: ComponentFixture<ButtonLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonLiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
