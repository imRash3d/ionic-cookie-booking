import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppOrderListPage } from './app-order-list.page';

describe('AppOrderListPage', () => {
  let component: AppOrderListPage;
  let fixture: ComponentFixture<AppOrderListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOrderListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppOrderListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
