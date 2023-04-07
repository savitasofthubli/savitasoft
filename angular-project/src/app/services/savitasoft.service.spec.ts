import { TestBed } from '@angular/core/testing';

import { SavitasoftService } from './savitasoft.service';

describe('SavitasoftService', () => {
  let service: SavitasoftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavitasoftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
