import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppWelcomePage } from './app-welcome.page';

describe('AppWelcomePage', () => {
  let component: AppWelcomePage;
  let fixture: ComponentFixture<AppWelcomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWelcomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppWelcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
