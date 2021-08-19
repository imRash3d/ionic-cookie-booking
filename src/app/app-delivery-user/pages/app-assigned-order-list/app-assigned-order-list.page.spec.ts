import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppAssignedOrderListPage } from './app-assigned-order-list.page';

describe('AppAssignedOrderListPage', () => {
  let component: AppAssignedOrderListPage;
  let fixture: ComponentFixture<AppAssignedOrderListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAssignedOrderListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppAssignedOrderListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
