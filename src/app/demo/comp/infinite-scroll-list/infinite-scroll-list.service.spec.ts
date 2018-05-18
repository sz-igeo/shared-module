/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InfiniteScrollListService } from './infinite-scroll-list.service';

describe('Service: InfiniteScrollList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfiniteScrollListService]
    });
  });

  it('should ...', inject([InfiniteScrollListService], (service: InfiniteScrollListService) => {
    expect(service).toBeTruthy();
  }));
});
