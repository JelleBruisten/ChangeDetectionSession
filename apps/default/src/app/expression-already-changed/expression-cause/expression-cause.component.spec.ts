import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionCauseComponent } from './expression-cause.component';

describe('ExpressionCauseComponent', () => {
  let component: ExpressionCauseComponent;
  let fixture: ComponentFixture<ExpressionCauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpressionCauseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpressionCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
