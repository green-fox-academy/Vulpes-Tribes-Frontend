import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TroopsComponent } from './troops.component';
import { TroopsService } from './troops.service';
import { HttpClientModule } from '@angular/common/http';
import { Troop } from '../../_models/troop.model';


describe('TroopsComponent', () => {
  let component: TroopsComponent;
  let fixture: ComponentFixture<TroopsComponent>;
  let service: TroopsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TroopsComponent],
      imports: [HttpClientModule],
      providers: [TroopsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroopsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TroopsService);
    //spyOn(service, 'getTroops').and.returnValue(Troops);
    fixture.detectChanges();
  });

  it('should create Troops component', () => {
    expect(component).toBeTruthy();
  });

  it('should count attack values from array of troops', () => {
    //component.countAttack(Troops);
    expect(component.totalAttack).toEqual(10);
  })
});
