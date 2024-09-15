import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditShiftComponent } from './dialog-edit-shift.component';

describe('DialogEditShiftComponent', () => {
  let component: DialogEditShiftComponent;
  let fixture: ComponentFixture<DialogEditShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogEditShiftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
