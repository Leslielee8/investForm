import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionModalComponent } from './submission-modal.component';

describe('SubmissionModalComponent', () => {
  let component: SubmissionModalComponent;
  let fixture: ComponentFixture<SubmissionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
