import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingDetailComponent } from './building-detail.component';
import {BuildingsComponent} from '../buildings.component';
import {BuildingComponent} from '../building/building.component';
import {ModalService} from './modal.service';
import {DomService} from './domService';

describe('BuildingDetailComponent', () => {
  let component: BuildingDetailComponent;
  let fixture: ComponentFixture<BuildingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuildingsComponent, BuildingComponent, BuildingDetailComponent],
      imports: [],
      providers: [ModalService, DomService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
