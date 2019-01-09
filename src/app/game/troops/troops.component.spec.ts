import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroopsComponent } from './troops.component';

describe('TroopsComponent', () => {
  let component: TroopsComponent;
  let fixture: ComponentFixture<TroopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
