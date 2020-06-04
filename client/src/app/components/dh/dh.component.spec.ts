/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DhComponent } from './dh.component';

describe('DhComponent', () => {
  let component: DhComponent;
  let fixture: ComponentFixture<DhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
