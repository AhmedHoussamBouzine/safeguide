import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarrakechComponent } from './marrakech.component';

describe('MarrakechComponent', () => {
  let component: MarrakechComponent;
  let fixture: ComponentFixture<MarrakechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarrakechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarrakechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
