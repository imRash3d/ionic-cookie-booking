import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductListViewPage } from './product-list-view.page';

describe('ProductListViewPage', () => {
  let component: ProductListViewPage;
  let fixture: ComponentFixture<ProductListViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
