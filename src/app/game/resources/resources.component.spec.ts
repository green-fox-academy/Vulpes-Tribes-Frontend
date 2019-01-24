import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesComponent } from './resources.component';
import { ResourcesService } from './resources.service';
import { of } from 'rxjs';

describe('ResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;
  let p;
  let bannerElement: HTMLElement;
  let p2;
  let bannerElement2: HTMLElement;

  const mockValues = {
    resources: [
      {
      amount: 500,
      type: 'food',
      generation: 0
    },
    {
      amount: 340,
      type: 'money',
      generation: 1
    }
  ]};

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ResourcesService', ['getResources']);
    spy.getResources.and.returnValue( of(mockValues));

    TestBed.configureTestingModule({
      declarations: [ResourcesComponent],
      providers: [
        { provide: ResourcesService, useValue: spy }
      ]
    });
    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
    bannerElement = fixture.nativeElement;
    p = bannerElement.getElementsByClassName('resourceMoney')[0];
    bannerElement2 = fixture.nativeElement;
    p2 = bannerElement2.getElementsByClassName('resourceFood')[0];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render 'money' amount from <p class='resourceMoney'>`, () => {
    fixture.detectChanges();
    expect(p.textContent).toContain('340');
  });

  it(`should render 'food' amount from <p class='resourceFood'>`, () => {
    fixture.detectChanges();
    expect(p2.textContent).toContain('500');
  });
});
