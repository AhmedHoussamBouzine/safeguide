import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TangierComponent } from './tangier.component';

describe('TangierComponent', () => {
  let component: TangierComponent;
  let fixture: ComponentFixture<TangierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TangierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TangierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
