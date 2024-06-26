import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsandtechniqueComponent } from './tipsandtechnique.component';

describe('TipsandtechniqueComponent', () => {
  let component: TipsandtechniqueComponent;
  let fixture: ComponentFixture<TipsandtechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipsandtechniqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipsandtechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
