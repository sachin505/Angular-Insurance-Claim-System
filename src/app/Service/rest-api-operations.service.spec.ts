import { TestBed } from '@angular/core/testing';

import { RestApiOperationsService } from './rest-api-operations.service';

describe('RestApiOperationsService', () => {
  let service: RestApiOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
