import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, CommonModule],
      schemas: [NO_ERRORS_SCHEMA], // ignore child components errors
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    await fixture.whenStable(); // wait for async tasks if any
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
