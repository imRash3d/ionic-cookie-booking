import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppGuestUserInputComponent } from './app-guest-user-input.component';

describe('AppGuestUserInputComponent', () => {
  let component: AppGuestUserInputComponent;
  let fixture: ComponentFixture<AppGuestUserInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGuestUserInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppGuestUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
