import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ResourcesService } from './resources.service';
import { async, TestBed } from '@angular/core/testing';
import { ResourcesComponent } from './resources.component';


describe('ResourcesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpModule,
      ],
      declarations: [ResourcesComponent]
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: ResourcesService = TestBed.get(ResourcesService);
    expect(service).toBeTruthy();
  });
});
