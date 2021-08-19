import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppCustomerPage } from './app-customer.page';

describe('AppCustomerPage', () => {
  let component: AppCustomerPage;
  let fixture: ComponentFixture<AppCustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCustomerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
