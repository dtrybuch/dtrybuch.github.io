import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideImageComponent } from './right-side-image.component';

describe('RightSideImageComponent', () => {
  let component: RightSideImageComponent;
  let fixture: ComponentFixture<RightSideImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightSideImageComponent]
    });
    fixture = TestBed.createComponent(RightSideImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
