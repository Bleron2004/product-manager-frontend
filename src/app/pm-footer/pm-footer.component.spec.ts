import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmFooterComponent } from './pm-footer.component';

describe('PmFooterComponent', () => {
  let component: PmFooterComponent;
  let fixture: ComponentFixture<PmFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
