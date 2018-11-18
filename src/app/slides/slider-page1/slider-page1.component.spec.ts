import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPage1Component } from './slider-page1.component';

describe('SliderPage1Component', () => {
  let component: SliderPage1Component;
  let fixture: ComponentFixture<SliderPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
