import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEventComponent } from './card-event.component';

describe('CardEventComponent', () => {
  let component: CardEventComponent;
  let fixture: ComponentFixture<CardEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
