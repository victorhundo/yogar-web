import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProfessorComponent } from './register-professor.component';

describe('RegisterProfessorComponent', () => {
  let component: RegisterProfessorComponent;
  let fixture: ComponentFixture<RegisterProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
