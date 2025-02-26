import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedEmailComponent } from './confirmed-email.component';

describe('ConfirmedEmailComponent', () => {
  let component: ConfirmedEmailComponent;
  let fixture: ComponentFixture<ConfirmedEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmedEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmedEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
