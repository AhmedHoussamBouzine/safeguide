import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FezComponent } from './fez.component';

describe('FezComponent', () => {
  let component: FezComponent;
  let fixture: ComponentFixture<FezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FezComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
