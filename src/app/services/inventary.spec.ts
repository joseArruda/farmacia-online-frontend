import { TestBed } from '@angular/core/testing';

import { Inventary } from './inventary';

describe('Inventary', () => {
  let service: Inventary;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Inventary);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
