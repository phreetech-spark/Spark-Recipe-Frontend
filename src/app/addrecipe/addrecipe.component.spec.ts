import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecipeComponent } from './addrecipe.component';

describe('AddrecipeComponent', () => {
  let component: AddrecipeComponent;
  let fixture: ComponentFixture<AddrecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddrecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
