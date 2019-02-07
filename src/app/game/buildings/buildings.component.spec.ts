import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildingsComponent } from './buildings.component';
import { BuildingComponent } from './building/building.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BuildingsService } from './buildings.service';
import { of } from 'rxjs';
import { BuildingResponseMock } from '../../_helpers/mocks/buildingResponse.mock';
import { NotificationFactory } from '../../_helpers/factories/notification.factory';

describe('BuildingsComponent', () => {
  let component: BuildingsComponent;
  let fixture: ComponentFixture<BuildingsComponent>;
  let service: BuildingsService;
  let buildingsMock = BuildingResponseMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuildingsComponent, BuildingComponent],
      imports: [
        BrowserModule,
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
      ],
      providers: [
        BuildingResponseMock,
        NotificationFactory,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(BuildingsService);
    buildingsMock = TestBed.get(BuildingResponseMock);
    spyOn(service, 'getBuildingsFromBackend').and.returnValue(of(buildingsMock));
    fixture.detectChanges();
  });

  it('should create the Buildings component', () => {
    expect(component).toBeTruthy();
  });

  it('getBackendBuildings method on initialization', () => {
    expect(service.getBuildingsFromBackend).toHaveBeenCalled();
  });
});
