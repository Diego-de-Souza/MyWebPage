import { TestBed } from '@angular/core/testing';

import { AuthOctokitService } from './auth-octokit.service';

describe('AuthOctokitService', () => {
  let service: AuthOctokitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthOctokitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
