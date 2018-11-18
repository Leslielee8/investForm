import { TestBed } from '@angular/core/testing';

import { SwiperManagerService } from './swiper-manager.service';

describe('SwiperManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwiperManagerService = TestBed.get(SwiperManagerService);
    expect(service).toBeTruthy();
  });
});
