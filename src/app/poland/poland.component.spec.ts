import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolandComponent } from './poland.component';

describe('PolandComponent', () => {
  let component: PolandComponent;
  let fixture: ComponentFixture<PolandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
