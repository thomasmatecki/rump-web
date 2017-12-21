import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvcPropertyComponent } from './svc-property.component';

describe('SvcPropertyComponent', () => {
  let component: SvcPropertyComponent;
  let fixture: ComponentFixture<SvcPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvcPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvcPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
