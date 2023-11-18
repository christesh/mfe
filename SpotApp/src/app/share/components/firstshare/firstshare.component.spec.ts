/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirstshareComponent } from './firstshare.component';

describe('FirstshareComponent', () => {
  let component: FirstshareComponent;
  let fixture: ComponentFixture<FirstshareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstshareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
