import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TroopsComponent } from './troops.component';
import { TroopsService } from './troops.service';
import { HttpClientModule } from '@angular/common/http';


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
    fixture.detectChanges();
  });

  it('should create Troops component', () => {
    expect(component).toBeTruthy();
  });

  it('should set totalAttack to any number >= 0', () => {
    expect(component.totalAttack).toBeGreaterThanOrEqual(0);
  })

  it('should return false if levels object is empty', () => {
    component.levels = {};
    expect(component.checkLevels()).toBeFalsy();
  })
});
