import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddShiftComponent } from './dialog-add-shift.component';

describe('DialogAddShiftComponent', () => {
  let component: DialogAddShiftComponent;
  let fixture: ComponentFixture<DialogAddShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAddShiftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
