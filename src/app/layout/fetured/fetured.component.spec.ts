import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeturedComponent } from './fetured.component';

describe('FeturedComponent', () => {
  let component: FeturedComponent;
  let fixture: ComponentFixture<FeturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeturedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
