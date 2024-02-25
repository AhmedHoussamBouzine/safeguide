import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabatComponent } from './rabat.component';

describe('RabatComponent', () => {
  let component: RabatComponent;
  let fixture: ComponentFixture<RabatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RabatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RabatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
