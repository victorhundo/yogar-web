/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InitialComponent } from './initial.component';

describe('InitialComponent', () => {
  let component: InitialComponent;
  let fixture: ComponentFixture<InitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
