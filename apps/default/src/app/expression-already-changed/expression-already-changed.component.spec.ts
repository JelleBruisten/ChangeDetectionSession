import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionAlreadyChangedComponent } from './expression-already-changed.component';

describe('ExpressionAlreadyChangedComponent', () => {
  let component: ExpressionAlreadyChangedComponent;
  let fixture: ComponentFixture<ExpressionAlreadyChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpressionAlreadyChangedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpressionAlreadyChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
