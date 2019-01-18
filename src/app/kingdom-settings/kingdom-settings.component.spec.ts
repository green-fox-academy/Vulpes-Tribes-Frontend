import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KingdomSettingsComponent } from './kingdom-settings.component';
import { Component, OnInit } from '@angular/core';
import {KingdomSettingsService} from '../kingdom-settings/kingdom-settings.service';
import { Kingdom } from '../_models/kingdom.model';
import { KingdomService } from '../services/kingdom.service';

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
