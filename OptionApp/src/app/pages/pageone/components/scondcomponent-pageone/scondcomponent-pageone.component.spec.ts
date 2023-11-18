/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScondcomponentPageoneComponent } from './scondcomponent-pageone.component';

describe('ScondcomponentPageoneComponent', () => {
  let component: ScondcomponentPageoneComponent;
  let fixture: ComponentFixture<ScondcomponentPageoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScondcomponentPageoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScondcomponentPageoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
