import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStudiantesComponent } from './dialog-studiantes.component';

describe('DialogStudiantesComponent', () => {
  let component: DialogStudiantesComponent;
  let fixture: ComponentFixture<DialogStudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogStudiantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogStudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
