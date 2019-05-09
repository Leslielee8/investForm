import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadApplicationFormModelComponent } from './download-application-form-model.component';

describe('DownloadApplicationFormModelComponent', () => {
  let component: DownloadApplicationFormModelComponent;
  let fixture: ComponentFixture<DownloadApplicationFormModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadApplicationFormModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadApplicationFormModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
