import { TestBed } from '@angular/core/testing';

import { WorkdisplayService } from './workdisplay.service';

describe('WorkdisplayService', () => {
  let service: WorkdisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkdisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
