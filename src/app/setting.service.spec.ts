import { TestBed } from '@angular/core/testing';

import { KingdomSettingsService } from './kingdom-settings/kingdom-settings.service';

describe('SettingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KingdomSettingsService = TestBed.get(KingdomSettingsService);
    expect(service).toBeTruthy();
  });
});
