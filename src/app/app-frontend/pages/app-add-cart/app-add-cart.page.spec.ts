import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppAddCartPage } from './app-add-cart.page';

describe('AppAddCartPage', () => {
  let component: AppAddCartPage;
  let fixture: ComponentFixture<AppAddCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAddCartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppAddCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
