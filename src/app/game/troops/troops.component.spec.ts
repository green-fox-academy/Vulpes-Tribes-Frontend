import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TroopsComponent } from './troops.component';
import { TroopsService } from './troops.service';


describe('TroopsComponent', () => {
  let component: TroopsComponent;
  let fixture: ComponentFixture<TroopsComponent>;

  const mockValues = {levels:{1:3,2:2,3:1},totalAttack:10,totalDefence:10,sustenance:6};

  beforeEach(() => {

    const spy = jasmine.createSpyObj('TroopsService', ['getTroopsAndStats']);
    spy.getTroopsAndStats.and.returnValue(mockValues);
    TestBed.configureTestingModule({
      declarations: [TroopsComponent],
      providers: [{provide: TroopsService, useValue: spy}]
    });
    fixture = TestBed.createComponent(TroopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Troops component', () => {
    expect(component).toBeTruthy();
  });

  it('should set totalAttack to 10', () => {
    expect(component.totalAttack).toEqual(10);
  })

  it('should return true if levels object is not empty', () => {
    expect(component.checkLevels()).toBeTruthy();
  })
});
