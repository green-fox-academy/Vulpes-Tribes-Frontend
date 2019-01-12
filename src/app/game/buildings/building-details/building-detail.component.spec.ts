import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BuildingDetailComponent} from './building-detail.component';
import {BuildingsComponent} from '../buildings.component';
import {BuildingComponent} from '../building/building.component';
import {ModalService} from './modal.service';
import {DomService} from './domService';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Building} from '../../../_models/building.model';
import {BuildingFactory} from '../../../_helpers/factories/building.factory';

describe('BuildingDetailComponent', () => {

  let component: BuildingDetailComponent;
  let fixture: ComponentFixture<BuildingDetailComponent>;

  let building: Building;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuildingsComponent, BuildingComponent, BuildingDetailComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [ModalService, DomService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingDetailComponent);
    component = fixture.componentInstance;
    building = new BuildingFactory().createBuildingComponent(123, 'mine');
    component.building = building;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displayed building type should be mine', () => {
    expect(component.building.type).toBe('mine');
  });

  it('displayed building id should be 123', () => {
    expect(component.building.id).toBe(123);
  });

  it('displayed building should be 1', () => {
    expect(component.building.level).toBe(1);
  });

  it('displayed building hp should be 100', () => {
    expect(component.building.type).toBe('mine');
  });

  it('displayed building started at', () => {
    expect(component.building.started_at).toBe(Date.now() - 1);
  });
});
