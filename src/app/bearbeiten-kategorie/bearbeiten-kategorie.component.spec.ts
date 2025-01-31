import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearbeitenKategorieComponent } from './bearbeiten-kategorie.component';

describe('BearbeitenKategorieComponent', () => {
  let component: BearbeitenKategorieComponent;
  let fixture: ComponentFixture<BearbeitenKategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BearbeitenKategorieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BearbeitenKategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
