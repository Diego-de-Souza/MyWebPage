import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilletComponent } from './fillet.component';

describe('FilletComponent', () => {
  let component: FilletComponent;
  let fixture: ComponentFixture<FilletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
