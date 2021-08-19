import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppAddProductPage } from './app-add-product.page';

describe('AppAddProductPage', () => {
  let component: AppAddProductPage;
  let fixture: ComponentFixture<AppAddProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAddProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppAddProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
