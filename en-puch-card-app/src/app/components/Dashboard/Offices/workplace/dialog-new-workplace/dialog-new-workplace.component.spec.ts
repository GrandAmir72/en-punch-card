import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewWorkplaceComponent } from './dialog-new-workplace.component';

describe('DialogNewWorkplaceComponent', () => {
  let component: DialogNewWorkplaceComponent;
  let fixture: ComponentFixture<DialogNewWorkplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogNewWorkplaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNewWorkplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
