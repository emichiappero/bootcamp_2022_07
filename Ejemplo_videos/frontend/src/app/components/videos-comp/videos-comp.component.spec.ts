import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCompComponent } from './videos-comp.component';

describe('VideosCompComponent', () => {
  let component: VideosCompComponent;
  let fixture: ComponentFixture<VideosCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
