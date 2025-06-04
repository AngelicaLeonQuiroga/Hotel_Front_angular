import { TestBed } from '@angular/core/testing';

import { LoginServiceMockService } from './login-service.mock.service';

describe('LoginServiceMockService', () => {
  let service: LoginServiceMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginServiceMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
