import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesComponent } from './resources.component';
import { By } from 'selenium-webdriver';

describe('ResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

  it(`should render 'food' and 'money' from <p>`, () => {
    expect(By.html('p').nativeElement.innerText).toContain('food' || 'money');
  });
  it(`should render values of the <p> if 'food' or 'money' is greater than 0`, () => {
    expect(By.html('p').nativeElement.innerText).toBeGreaterThan(0);
  });
});
