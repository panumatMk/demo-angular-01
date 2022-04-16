import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxApp01Component } from './ngrx-app01.component';

describe('NgrxApp01Component', () => {
  let component: NgrxApp01Component;
  let fixture: ComponentFixture<NgrxApp01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxApp01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxApp01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
