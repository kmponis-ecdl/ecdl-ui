import { TestBed, inject } from '@angular/core/testing';

import { AdminGuard } from './admin.guard';

describe('CenteraGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminGuard]
    });
  });

  it('should ...', inject([AdminGuard], (guard: AdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
