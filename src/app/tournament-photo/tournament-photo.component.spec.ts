import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentPhotoComponent } from './tournament-photo.component';

describe('TournamentPhotoComponent', () => {
  let component: TournamentPhotoComponent;
  let fixture: ComponentFixture<TournamentPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
