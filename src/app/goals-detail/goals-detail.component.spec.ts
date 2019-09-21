import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsDetailComponent } from './goals-detail.component';

describe('GoalsDetailComponent', () => {
  let component: GoalsDetailComponent;
  let fixture: ComponentFixture<GoalsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
