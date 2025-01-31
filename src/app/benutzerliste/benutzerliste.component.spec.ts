import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenutzerlisteComponent } from './benutzerliste.component';

describe('BenutzerlisteComponent', () => {
  let component: BenutzerlisteComponent;
  let fixture: ComponentFixture<BenutzerlisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenutzerlisteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenutzerlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
