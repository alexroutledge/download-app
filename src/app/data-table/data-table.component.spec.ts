import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DataTableComponent } from './data-table.component';
import { IconModule } from './../icon/icon.module';
import { DialogModule } from './../dialog/dialog.module';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const mockDialog = {
  // noop
  open: () => undefined
}

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableComponent ],
      imports: [MatTableModule, MatCheckboxModule, IconModule, DialogModule, MatProgressBarModule],
      providers: [
        {
          provide: MatDialog,
          useValue: mockDialog
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should determine if all items are selected', () => {
    const item = {
      name: 'smss.exe',
      device: 'Stark',
      path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
      status: 'available'
    };
    // should return false as no items are selected
    component.data = [item];
    expect(component.isAllSelected()).toBe(false);
    // should return true as all items are selected
    component.data = [item];
    component.selection.select(item);
    expect(component.isAllSelected()).toBe(true);
  });

  it('should select all items', () => {
    const item = {
      name: 'smss.exe',
      device: 'Stark',
      path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
      status: 'available'
    };
    // should select all items if not all items are currently selected
    spyOn(component.selection, 'select');
    component.data = [item];
    component.masterToggle();
    expect(component.selection.select).toHaveBeenCalledWith(item);;
  });

  it('should unselect all items', () => {
    const item = {
      name: 'smss.exe',
      device: 'Stark',
      path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
      status: 'available'
    };
    // should unselect all items if all items are currently selected
    spyOn(component.selection, 'clear');
    component.data = [item];
    component.selection.select(item);
    component.masterToggle();
    expect(component.selection.clear).toHaveBeenCalled();
  });

  it('should open the dialog', () => {
    spyOn(TestBed.get(MatDialog), 'open');
    component.openDialog();
    expect(TestBed.get(MatDialog).open).toHaveBeenCalled();
  });

});
