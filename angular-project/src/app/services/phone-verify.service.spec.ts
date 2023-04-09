import { TestBed } from '@angular/core/testing';

import { PhoneVerifyService } from './phone-verify.service';

describe('PhoneVerifyService', () => {
  let service: PhoneVerifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneVerifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
