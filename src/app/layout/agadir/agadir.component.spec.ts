import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgadirComponent } from './agadir.component';

describe('AgadirComponent', () => {
  let component: AgadirComponent;
  let fixture: ComponentFixture<AgadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgadirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
