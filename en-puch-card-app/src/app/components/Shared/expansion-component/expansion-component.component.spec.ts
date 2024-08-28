import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionComponentComponent } from './expansion-component.component';

describe('ExpansionComponentComponent', () => {
  let component: ExpansionComponentComponent;
  let fixture: ComponentFixture<ExpansionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpansionComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
