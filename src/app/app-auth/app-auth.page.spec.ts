import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppAuthPage } from './app-auth.page';

describe('AppAuthPage', () => {
  let component: AppAuthPage;
  let fixture: ComponentFixture<AppAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAuthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
