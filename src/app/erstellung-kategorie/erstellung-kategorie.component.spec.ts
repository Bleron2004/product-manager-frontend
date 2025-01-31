import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErstellungKategorieComponent } from './erstellung-kategorie.component';

describe('ErstellungKategorieComponent', () => {
  let component: ErstellungKategorieComponent;
  let fixture: ComponentFixture<ErstellungKategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErstellungKategorieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErstellungKategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
