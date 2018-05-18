import { TestBed, inject } from '@angular/core/testing';

import { CosmosdbService } from './cosmosdb.service';

describe('CosmosdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CosmosdbService]
    });
  });

  it('should be created', inject([CosmosdbService], (service: CosmosdbService) => {
    expect(service).toBeTruthy();
  }));
});
