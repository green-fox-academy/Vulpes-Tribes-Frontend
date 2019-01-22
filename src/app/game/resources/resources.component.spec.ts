import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesComponent } from './resources.component';

describe('ResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpModule,
      ],
      declarations: [ResourcesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render 'money' amount from <p class='resourceMoney'>`, () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.getElementsByClassName('resourceMoney')[0];
    fixture.detectChanges();
    expect(p.textContent).toContain('340');
  });

  it(`should render 'food' amount from <p class='resourceFood'>`, () => {
    const bannerElement2: HTMLElement = fixture.nativeElement;
    const p2 = bannerElement2.getElementsByClassName('resourceFood')[0];
    fixture.detectChanges();
    expect(p2.textContent).toContain('500');
  });
});
