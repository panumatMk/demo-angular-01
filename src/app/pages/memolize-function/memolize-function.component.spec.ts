import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemolizeFunctionComponent } from './memolize-function.component';

describe('MemolizeFunctionComponent', () => {
  let component: MemolizeFunctionComponent;
  let fixture: ComponentFixture<MemolizeFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemolizeFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemolizeFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
