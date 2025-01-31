import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmHeaderComponent } from './pm-header.component';

describe('PmHeaderComponent', () => {
  let component: PmHeaderComponent;
  let fixture: ComponentFixture<PmHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
