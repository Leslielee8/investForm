import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPage5Component } from './slider-page5.component';

describe('SliderPage5Component', () => {
  let component: SliderPage5Component;
  let fixture: ComponentFixture<SliderPage5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPage5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
