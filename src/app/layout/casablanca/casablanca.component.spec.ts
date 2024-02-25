import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasablancaComponent } from './casablanca.component';

describe('CasablancaComponent', () => {
  let component: CasablancaComponent;
  let fixture: ComponentFixture<CasablancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasablancaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasablancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
