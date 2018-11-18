import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureSafeComponent } from './secure-safe.component';

describe('SecureSafeComponent', () => {
  let component: SecureSafeComponent;
  let fixture: ComponentFixture<SecureSafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureSafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureSafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
