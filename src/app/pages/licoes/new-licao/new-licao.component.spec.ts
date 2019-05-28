/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewLicaoComponent } from './new-licao.component';

describe('NewLicaoComponent', () => {
  let component: NewLicaoComponent;
  let fixture: ComponentFixture<NewLicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
