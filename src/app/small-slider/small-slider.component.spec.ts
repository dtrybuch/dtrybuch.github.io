import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSliderComponent } from './small-slider.component';

describe('SmallSliderComponent', () => {
  let component: SmallSliderComponent;
  let fixture: ComponentFixture<SmallSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallSliderComponent]
    });
    fixture = TestBed.createComponent(SmallSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
