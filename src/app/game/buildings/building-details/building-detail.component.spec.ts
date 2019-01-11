import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BuildingDetailComponent} from './building-detail.component';
import {BuildingsComponent} from '../buildings.component';
import {BuildingComponent} from '../building/building.component';
import {ModalService} from './modal.service';
import {DomService} from './domService';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Building} from '../../../_models/building.model';
import {Component} from '@angular/core';
import {BuildingFactory} from '../../../_helpers/factories/building.factory';

describe('BuildingDetailComponent', () => {
  @Component({
    selector: 'app-host-component',
    template: `<app-building-detail [building]="building"></app-building-detail>`
  })
  class TestHostComponent {
    building = new BuildingFactory().createBuildingComponent(123, 'mine');
  }

  let component: BuildingDetailComponent;
  let fixture: ComponentFixture<BuildingDetailComponent>;
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuildingsComponent, BuildingComponent, BuildingDetailComponent, TestHostComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [ModalService, DomService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();

    fixture = TestBed.createComponent(BuildingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
