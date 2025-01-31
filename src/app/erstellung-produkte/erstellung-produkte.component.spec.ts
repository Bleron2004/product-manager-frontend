import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErstellungProdukteComponent } from './erstellung-produkte.component';

describe('ErstellungProdukteComponent', () => {
  let component: ErstellungProdukteComponent;
  let fixture: ComponentFixture<ErstellungProdukteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErstellungProdukteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErstellungProdukteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
