import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppProductListPage } from './app-product-list.page';

describe('AppProductListPage', () => {
  let component: AppProductListPage;
  let fixture: ComponentFixture<AppProductListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProductListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppProductListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
