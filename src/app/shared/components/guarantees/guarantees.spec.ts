import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guarantees } from './guarantees';

describe('Guarantees', () => {
  let component: Guarantees;
  let fixture: ComponentFixture<Guarantees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guarantees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guarantees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
