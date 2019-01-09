import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KingdomSettingsComponent } from './kingdom-settings.component';

describe('SettingsComponent', () => {
  let component: KingdomSettingsComponent;
  let fixture: ComponentFixture<KingdomSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingdomSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KingdomSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
