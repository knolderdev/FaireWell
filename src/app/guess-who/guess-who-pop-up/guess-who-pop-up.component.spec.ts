import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessWhoPopUpComponent } from './guess-who-pop-up.component';

describe('GuessWhoPopUpComponent', () => {
  let component: GuessWhoPopUpComponent;
  let fixture: ComponentFixture<GuessWhoPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessWhoPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessWhoPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
