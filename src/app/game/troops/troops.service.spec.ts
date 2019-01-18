import { TestBed } from '@angular/core/testing';
import { TroopsService } from './troops.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Troop } from 'src/app/_models/troop.model';

fdescribe('TroopsService', () => {

  let service: TroopsService;

  beforeEach(async () => {
    return TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        TroopsService
      ]
    });
  });

  beforeEach(() => {
    service = TestBed.get(TroopsService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return array of troops', () => {
    let troops: Troop[];
    service.getTroops().subscribe((response) => {
      troops.push(response.body);
      expect(troops[0]).toEqual(
        {
          id: 1,
          level: 1,
          hp: 1,
          attack: 1,
          defence: 1,
          started_at: 1231232312,
          finished_at: 7652146122,
        }
      )
    })
  });
});
