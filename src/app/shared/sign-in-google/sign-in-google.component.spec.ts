import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInGoogleComponent } from './sign-in-google.component';

describe('SignInGoogleComponent', () => {
  let component: SignInGoogleComponent;
  let fixture: ComponentFixture<SignInGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInGoogleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
