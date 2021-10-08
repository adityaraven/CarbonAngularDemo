import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromtFormComponent } from './promt-form.component';

describe('PromtFormComponent', () => {
  let component: PromtFormComponent;
  let fixture: ComponentFixture<PromtFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromtFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
