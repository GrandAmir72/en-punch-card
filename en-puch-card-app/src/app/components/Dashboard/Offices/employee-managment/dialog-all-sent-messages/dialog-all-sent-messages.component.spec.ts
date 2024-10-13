import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAllSentMessagesComponent } from './dialog-all-sent-messages.component';

describe('DialogAllSentMessagesComponent', () => {
  let component: DialogAllSentMessagesComponent;
  let fixture: ComponentFixture<DialogAllSentMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAllSentMessagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAllSentMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
