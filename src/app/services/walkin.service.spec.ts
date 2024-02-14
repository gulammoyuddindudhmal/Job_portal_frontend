import { TestBed } from '@angular/core/testing';

import { WalkinService } from './walkin.service';

describe('WalkinService', () => {
  let service: WalkinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalkinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
