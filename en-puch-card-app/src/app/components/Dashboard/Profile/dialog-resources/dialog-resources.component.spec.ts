import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogResourcesComponent } from './dialog-resources.component';

describe('DialogResourcesComponent', () => {
  let component: DialogResourcesComponent;
  let fixture: ComponentFixture<DialogResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
