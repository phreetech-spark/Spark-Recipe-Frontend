import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthentcatedLayoutComponent } from './unauthentcated-layout.component';

describe('UnauthentcatedLayoutComponent', () => {
  let component: UnauthentcatedLayoutComponent;
  let fixture: ComponentFixture<UnauthentcatedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnauthentcatedLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthentcatedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
