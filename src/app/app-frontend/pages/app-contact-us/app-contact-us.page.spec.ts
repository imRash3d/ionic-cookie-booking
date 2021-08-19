import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppContactUsPage } from './app-contact-us.page';

describe('AppContactUsPage', () => {
  let component: AppContactUsPage;
  let fixture: ComponentFixture<AppContactUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContactUsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppContactUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
