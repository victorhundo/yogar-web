import { TestBed } from '@angular/core/testing';

import { ProfessorServiceService } from './professor-service.service';

describe('ProfessorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfessorServiceService = TestBed.get(ProfessorServiceService);
    expect(service).toBeTruthy();
  });
});
