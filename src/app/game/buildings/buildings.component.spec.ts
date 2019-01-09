import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsComponent } from './buildings.component';
import {BuildingComponent} from './building/building.component';
import {BuildingDetailComponent} from './building-details/building-detail.component';
import {ModalService} from './building-details/modal.service';
import {DomService} from './building-details/domService';

describe('BuildingsComponent', () => {
  let component: BuildingsComponent;
  let fixture: ComponentFixture<BuildingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuildingsComponent, BuildingComponent, BuildingDetailComponent],
      imports: [ ModalService, DomService],
      providers: [ModalService, DomService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
