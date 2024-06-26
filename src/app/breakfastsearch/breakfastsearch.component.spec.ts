import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastsearchComponent } from './breakfastsearch.component';

describe('BreakfastsearchComponent', () => {
  let component: BreakfastsearchComponent;
  let fixture: ComponentFixture<BreakfastsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreakfastsearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakfastsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
