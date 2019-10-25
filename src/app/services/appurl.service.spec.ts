import { TestBed } from '@angular/core/testing';

import { AppurlService } from './appurl.service';

describe('AppurlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppurlService = TestBed.get(AppurlService);
    expect(service).toBeTruthy();
  });
});
