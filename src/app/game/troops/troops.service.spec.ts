import { TestBed } from '@angular/core/testing';
import { TroopsService } from './troops.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Troop } from 'src/app/_models/troop.model';

describe('TroopsService', () => {

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

  it('should return attack sum', () => {
    let troops = [
      {id: 1, attack: 1},
      {id: 2, attack: 2}
    ];
    expect(service.countAttack(troops)).toEqual(3);
  });

  it('should return defence sum', () => {
    let troops = [
      {id: 1, defence: 1},
      {id: 2, defence: 2}
    ];
    expect(service.countDefence(troops)).toEqual(3);
  });

  it('should return an object with level numbers : their sums', () => {
    let troops = [
      {id: 1, level: 1},
      {id: 2, level: 2},
      {id: 3, level: 2}
    ];
    expect(service.setLevels(troops)).toEqual({1:1,2:2});
  });

  it('should return an object with given properties', () => {
    expect(service.run().hasOwnProperty('levels' && 'totalAttack' && 'totalDefence' && 'sustenance')).toBeTruthy();
  })
});
