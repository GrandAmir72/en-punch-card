import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddLeaveComponent } from './dialog-add-leave.component';

describe('DialogAddLeaveComponent', () => {
  let component: DialogAddLeaveComponent;
  let fixture: ComponentFixture<DialogAddLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAddLeaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
