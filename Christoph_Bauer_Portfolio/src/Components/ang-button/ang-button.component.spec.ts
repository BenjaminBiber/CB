import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngButtonComponent } from './ang-button.component';

describe('AngButtonComponent', () => {
  let component: AngButtonComponent;
  let fixture: ComponentFixture<AngButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
