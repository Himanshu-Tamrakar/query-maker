import { TestBed } from '@angular/core/testing';

import { QueryBuilderFormService } from './query-builder-form.service';

describe('QueryBuilderFormService', () => {
  let service: QueryBuilderFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryBuilderFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
