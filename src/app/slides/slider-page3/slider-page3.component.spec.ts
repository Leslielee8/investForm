import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPage3Component } from './slider-page3.component';

describe('SliderPage3Component', () => {
  let component: SliderPage3Component;
  let fixture: ComponentFixture<SliderPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
