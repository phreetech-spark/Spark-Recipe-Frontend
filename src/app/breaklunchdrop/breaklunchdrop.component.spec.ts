import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreaklunchdropComponent } from './breaklunchdrop.component';

describe('BreaklunchdropComponent', () => {
  let component: BreaklunchdropComponent;
  let fixture: ComponentFixture<BreaklunchdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreaklunchdropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreaklunchdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
