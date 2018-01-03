import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvcWorkbenchComponent } from './svc-workbench.component';

describe('SvcWorkbenchComponent', () => {
  let component: SvcWorkbenchComponent;
  let fixture: ComponentFixture<SvcWorkbenchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvcWorkbenchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvcWorkbenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
