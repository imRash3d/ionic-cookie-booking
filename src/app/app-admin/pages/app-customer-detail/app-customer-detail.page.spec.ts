import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppCustomerDetailPage } from './app-customer-detail.page';

describe('AppCustomerDetailPage', () => {
  let component: AppCustomerDetailPage;
  let fixture: ComponentFixture<AppCustomerDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCustomerDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppCustomerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
