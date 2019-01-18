import { TestBed } from '@angular/core/testing';

import { KingdomService } from './services/kingdom.service';
import { async } from 'q';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Kingdom } from './_models/kingdom.model';

describe('KingdomService', () => {
  let service: KingdomService;

  beforeEach(async() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([])
    ],
    providers: [
      KingdomService
    ]
  });
});

  beforeEach(() => {
    service = TestBed.get(KingdomService);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return kingdom', () => {
    let kingdom: Kingdom;
    service.getKingdom().subscribe(response => {
      kingdom = response.body;
      expect(kingdom.name).toEqual('My Kingdom');
  });
});
});