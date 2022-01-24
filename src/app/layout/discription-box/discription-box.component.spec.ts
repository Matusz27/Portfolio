import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscriptionBoxComponent } from './discription-box.component';

describe('DiscriptionBoxComponent', () => {
  let component: DiscriptionBoxComponent;
  let fixture: ComponentFixture<DiscriptionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscriptionBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscriptionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
