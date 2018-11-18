import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPage2Component } from './slider-page2.component';

describe('SliderPage2Component', () => {
  let component: SliderPage2Component;
  let fixture: ComponentFixture<SliderPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
