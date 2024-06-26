import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleterecipeComponent } from './deleterecipe.component';

describe('DeleterecipeComponent', () => {
  let component: DeleterecipeComponent;
  let fixture: ComponentFixture<DeleterecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleterecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleterecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
