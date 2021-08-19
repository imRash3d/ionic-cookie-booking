import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppAboutUsPage } from './app-about-us.page';

describe('AppAboutUsPage', () => {
  let component: AppAboutUsPage;
  let fixture: ComponentFixture<AppAboutUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAboutUsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppAboutUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
