import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickandeasyComponent } from './quickandeasy.component';

describe('QuickandeasyComponent', () => {
  let component: QuickandeasyComponent;
  let fixture: ComponentFixture<QuickandeasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickandeasyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickandeasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
