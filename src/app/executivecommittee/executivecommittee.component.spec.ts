import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutivecommitteeComponent } from './executivecommittee.component';

describe('ExecutivecommitteeComponent', () => {
  let component: ExecutivecommitteeComponent;
  let fixture: ComponentFixture<ExecutivecommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutivecommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutivecommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
