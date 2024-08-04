import { TestBed } from '@angular/core/testing';

import { ScrollwindowService } from './scrollwindow.service';

describe('ScrollwindowService', () => {
  let service: ScrollwindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollwindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
