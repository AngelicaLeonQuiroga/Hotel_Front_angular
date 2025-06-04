import { TestBed } from '@angular/core/testing';

import { ClientRepositoryService } from './client-repository.service';

describe('ClientRepositoryService', () => {
  let service: ClientRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
