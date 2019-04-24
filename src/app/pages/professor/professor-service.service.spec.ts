import { TestBed } from '@angular/core/testing';

import { ProfessorService } from './professor-service.service';

describe('ProfessorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfessorService = TestBed.get(ProfessorService);
    expect(service).toBeTruthy();
  });
});
