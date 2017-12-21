import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvcEntityComponent } from './svc-entity.component';

describe('SvcEntityComponent', () => {
  let component: SvcEntityComponent;
  let fixture: ComponentFixture<SvcEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvcEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvcEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
