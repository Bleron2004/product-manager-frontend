import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearbeitenProduktComponent } from './bearbeiten-produkt.component';

describe('BearbeitenProduktComponent', () => {
  let component: BearbeitenProduktComponent;
  let fixture: ComponentFixture<BearbeitenProduktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BearbeitenProduktComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BearbeitenProduktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
