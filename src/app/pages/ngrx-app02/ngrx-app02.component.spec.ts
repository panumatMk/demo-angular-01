import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxApp02Component } from './ngrx-app02.component';

describe('NgrxApp02Component', () => {
  let component: NgrxApp02Component;
  let fixture: ComponentFixture<NgrxApp02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxApp02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxApp02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
