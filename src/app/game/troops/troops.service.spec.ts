import { TestBed } from '@angular/core/testing';
import { TroopsService } from './troops.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('TroopsService', () => {

  let service: TroopsService;
  const troops = [
    {
      id: 1,
      level: 1,
      hp: 1,
      attack: 1,
      defence: 1,
      startedAt: 1231232312,
      finishedAt: 7652146122,
    },
    {
      id: 1,
      level: 2,
      hp: 1,
      attack: 1,
      defence: 1,
      startedAt: 1231232312,
      finishedAt: 7652146122,
    },
    {
      id: 1,
      level: 2,
      hp: 1,
      attack: 1,
      defence: 1,
      startedAt: 1231232312,
      finishedAt: 7652146122,
    }
  ];

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
    service.getTroops().subscribe((response) => {
      expect(response[0]).toEqual(
        {
          id: 1,
          level: 1,
          hp: 1,
          attack: 1,
          defence: 1,
          startedAt: 1231232312,
          finishedAt: 7652146122,
        }
      )
    })
  });

  it('should return attack sum', () => {
    expect(service.countAttack(troops)).toEqual(3);
  });

  it('should return defence sum', () => {
    expect(service.countDefence(troops)).toEqual(3);
  });

  it('should return an object with level numbers : their sums', () => {
    expect(service.calculateTroopLevels(troops)).toEqual({1:1,2:2});
  });

  it('should return an object with given properties', () => {
    expect(service.getStats().hasOwnProperty('levels' && 'totalAttack' && 'totalDefence' && 'sustenance')).toBeTruthy();
  })
});
