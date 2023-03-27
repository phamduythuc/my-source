import { TestBed } from '@angular/core/testing';

import { LoadingComponentService } from './loading-component.service';

describe('LoadingComponentService', () => {
  let service: LoadingComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
