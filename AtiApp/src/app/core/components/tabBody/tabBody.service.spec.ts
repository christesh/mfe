/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TabBodyService } from './tabBody.service';

describe('Service: TabBody', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabBodyService]
    });
  });

  it('should ...', inject([TabBodyService], (service: TabBodyService) => {
    expect(service).toBeTruthy();
  }));
});
