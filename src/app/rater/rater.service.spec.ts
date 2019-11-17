import { TestBed } from '@angular/core/testing';

import { RaterService } from './rater.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('RaterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: RaterService = TestBed.get(RaterService);
    expect(service).toBeTruthy();
  });
});
