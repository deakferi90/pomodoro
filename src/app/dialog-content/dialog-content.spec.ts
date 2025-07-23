import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogContentComponent } from './dialog-content';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';

describe('DialogContentComponent', () => {
  let component: DialogContentComponent;
  let fixture: ComponentFixture<DialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogContentComponent, MatDialogModule, MatButtonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the dialog component', () => {
    expect(component).toBeTruthy();
  });

  it('should render dialog content text', () => {
    const content = fixture.debugElement.query(By.css('mat-dialog-content'));
    expect(content).toBeTruthy();
    expect(content.nativeElement.textContent).toContain(
      'This is a dialog in Angular 17!'
    );
  });

  it('should render close button', () => {
    const button = fixture.debugElement.query(
      By.css('button[mat-button][mat-dialog-close]')
    );
    expect(button).toBeTruthy();
    expect(button.nativeElement.textContent.trim()).toBe('Close');
  });
});
