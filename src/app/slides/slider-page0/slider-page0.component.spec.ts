import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPage0Component } from './slider-page0.component';

describe('SliderPage0Component', () => {
  let component: SliderPage0Component;
  let fixture: ComponentFixture<SliderPage0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPage0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPage0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
