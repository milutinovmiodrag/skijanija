import { TestBed } from '@angular/core/testing';

import { MountService } from './mount.service';

describe('MountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MountService = TestBed.get(MountService);
    expect(service).toBeTruthy();
  });
});
