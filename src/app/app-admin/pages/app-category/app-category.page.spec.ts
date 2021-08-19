import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppCategoryPage } from './app-category.page';

describe('AppCategoryPage', () => {
  let component: AppCategoryPage;
  let fixture: ComponentFixture<AppCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
