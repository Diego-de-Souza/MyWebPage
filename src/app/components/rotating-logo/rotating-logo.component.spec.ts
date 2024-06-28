import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingLogoComponent } from './rotating-logo.component';

describe('RotatingLogoComponent', () => {
  let component: RotatingLogoComponent;
  let fixture: ComponentFixture<RotatingLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotatingLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotatingLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
