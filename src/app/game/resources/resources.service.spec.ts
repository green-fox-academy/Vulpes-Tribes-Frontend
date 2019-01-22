import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ResourcesService } from './resources.service';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { ResourcesComponent } from './resources.component';
import { componentFactoryName } from '@angular/compiler';


describe('ResourcesService', () => {
let component: ResourcesComponent;
let fixture: ComponentFixture<ResourcesComponent>;

  beforeEach(() => {
  const spy = jasmine.createSpyObj('ResourcesService', ['getResources']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpModule,
      ],
      declarations: [ResourcesComponent],
      providers: [
        { provide: ResourcesService, useValue: spy }
      ]
    });
    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
  });

  beforeEach(async(() => {
  }));

  it('should be created', () => {
    const service: ResourcesService = TestBed.get(ResourcesService);
    expect(service).toBeTruthy();
  });
});
