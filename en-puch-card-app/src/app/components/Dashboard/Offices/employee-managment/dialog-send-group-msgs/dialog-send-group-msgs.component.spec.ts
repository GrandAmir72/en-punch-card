import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSendGroupMsgsComponent } from './dialog-send-group-msgs.component';

describe('DialogSendGroupMsgsComponent', () => {
  let component: DialogSendGroupMsgsComponent;
  let fixture: ComponentFixture<DialogSendGroupMsgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogSendGroupMsgsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSendGroupMsgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
