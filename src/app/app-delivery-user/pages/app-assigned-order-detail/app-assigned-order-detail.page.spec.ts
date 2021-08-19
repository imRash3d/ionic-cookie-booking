import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppAssignedOrderDetailPage } from './app-assigned-order-detail.page';

describe('AppAssignedOrderDetailPage', () => {
  let component: AppAssignedOrderDetailPage;
  let fixture: ComponentFixture<AppAssignedOrderDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAssignedOrderDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppAssignedOrderDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
