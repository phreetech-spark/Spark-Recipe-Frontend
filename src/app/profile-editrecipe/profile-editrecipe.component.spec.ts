import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditrecipeComponent } from './profile-editrecipe.component';

describe('ProfileEditrecipeComponent', () => {
  let component: ProfileEditrecipeComponent;
  let fixture: ComponentFixture<ProfileEditrecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileEditrecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileEditrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
