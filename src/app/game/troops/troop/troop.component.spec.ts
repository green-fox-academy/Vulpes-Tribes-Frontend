import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroopComponent } from './troop.component';

describe('TroopComponent', () => {
  let component: TroopComponent;
  let fixture: ComponentFixture<TroopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
