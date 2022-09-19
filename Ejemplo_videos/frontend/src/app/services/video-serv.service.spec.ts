import { TestBed } from '@angular/core/testing';

import { VideoServService } from './video-serv.service';

describe('VideoServService', () => {
  let service: VideoServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
