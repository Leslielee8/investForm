import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPage4Component } from './slider-page4.component';

describe('SliderPage4Component', () => {
  let component: SliderPage4Component;
  let fixture: ComponentFixture<SliderPage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
