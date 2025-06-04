import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThComponent } from './th.component';

describe('ThComponent', () => {
  let component: ThComponent;
  let fixture: ComponentFixture<ThComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
