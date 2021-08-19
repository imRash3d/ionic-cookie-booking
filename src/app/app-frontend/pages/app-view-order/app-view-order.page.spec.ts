import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppViewOrderPage } from './app-view-order.page';

describe('AppViewOrderPage', () => {
  let component: AppViewOrderPage;
  let fixture: ComponentFixture<AppViewOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppViewOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppViewOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
