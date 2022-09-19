import { TestBed } from '@angular/core/testing';

import { TodoServService } from './todo-serv.service';

describe('TodoServService', () => {
  let service: TodoServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
